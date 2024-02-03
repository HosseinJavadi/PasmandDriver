import { useMutation, useQuery } from "@tanstack/react-query";
import { RequestInterface, UseFetchRequest, UseFetchResponse } from ".";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ErrorResponseInterface } from "../interfaces";
import { toast } from "react-toastify";

export const useFetch = <TData = {}, TBody = {}, TQuery = {}>({
  request,
  errorHandler,
  onSuccess,
  fetchInitial = false,
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
    if (fetch && !fetch.error && fetch.isSuccess) {
      onSuccess?.(fetch.data);
      setEnable(false);
    }
  }, [fetch.data]);

  if (!fetch.error && fetch.isSuccess) {
    return {
      data: {
        error: fetch.error,
        status: fetch.status,
        data: fetch.data,
      },
      reFetch(payload, query) {
        setBody({ ...body, body: payload, query: query });
        setEnable(true);
      },
      requestDetail: body,
      isLoading: fetch.isFetching,
    };
  } else if (fetch.error) {
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
      requestDetail: body,
      isLoading: fetch.isFetching,
    };
  }

  return {
    reFetch(payload, query) {
      setBody({ ...body, body: payload, query: query });
      setEnable(true);
    },
    requestDetail: body,
    isLoading: fetch.isFetching,
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
