import { useQuery } from "@tanstack/react-query";
import {
  RequestInterface,
  ResponseInterface,
  UseFetchRequest,
  UseFetchResponse,
} from ".";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ErrorResponseInterface } from "../interfaces";
import { toast } from "react-toastify";

export const useFetch = <TData = {}, TBody = {}, TQuery = {}>({
  request,
  errorHandler,
  fetchInitial,
  onSuccess,
}: UseFetchRequest<TData, TBody, TQuery>): UseFetchResponse<
  TData,
  TBody,
  TQuery
> => {
  const [body, setBody] = useState<RequestInterface<TBody, TQuery>>({
    ...request,
  });
  const [enable, setEnable] = useState<boolean>(fetchInitial ?? false);
  const fetch = useQuery<TData>({
    queryKey: [body],
    queryFn: () => creatorAxios<TData>({ ...body }).then((res) => res.data),
    gcTime: 0,
    staleTime: 0,
    retry: 0,
    enabled: enable,
  });

  useEffect(() => {
    if (fetch && fetch.isSuccess && !fetch.error) {
      onSuccess?.(fetch.data);
    }
  }, [fetch]);

  if (!fetch.error && fetch.isSuccess) {
    return {
      data: {
        error: fetch.error,
        status: fetch.status,
        data: fetch.data,
        isLoading: fetch.isFetching,
      },
      reFetch(payload, query) {
        setBody({ ...body, body: payload, query: query });
        setEnable(true);
      },
    };
  } else if (fetch.error) {
    debugger;
    if (fetch.error instanceof AxiosError) {
      if (errorHandler)
        errorHandler(
          fetch.error.response?.data as unknown as ErrorResponseInterface
        );
      else {
        (
          fetch.error.response?.data as unknown as ErrorResponseInterface
        ).error.forEach((n) => {
          toast.error(n.message);
        });
      }
    }

    return {
      reFetch(payload, query) {
        setBody({ ...body, body: payload, query: query });
        setEnable(true);
      },
    };
  }
  return {
    reFetch(payload, query) {
      setBody({ ...body, body: payload, query: query });
      setEnable(true);
    },
  };
};

const creatorAxios = <TData>({
  method,
  url,
  body,
  header,
  query,
}: RequestInterface<unknown, unknown>) => {
  if (method === "Post")
    return axios.post<TData>(url, body, { headers: header });
  else
    return axios.get<TData>(
      `${url}${
        query
          ? `?${Object.getOwnPropertyNames(query).map(
              (n) => `${n}=${query[n as keyof typeof query]}`
            )}`
          : ""
      }`
    );
};
