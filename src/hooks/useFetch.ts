import { useQuery } from "@tanstack/react-query";
import { RequestInterface, UseFetchRequest, UseFetchResponse } from ".";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ErrorResponseInterface } from "../interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useFetch = <TData = {}, TBody = unknown, TQuery = unknown>({
  request,
  errorHandler,
  onSuccess,
  fetchInitial = false,
}: UseFetchRequest<TData, TBody, TQuery>): UseFetchResponse<
  TData,
  TBody,
  TQuery
> => {
  var navigate = useNavigate();
  const [body, setBody] = useState<RequestInterface<TBody, TQuery>>({
    ...request,
  });
  const [enable, setEnable] = useState<boolean>(fetchInitial ?? false);
  const fetch = useQuery<TData>({
    queryKey: [body],
    queryFn: () =>
      creatorAxios<TData>({ ...body })
        .then((res) => res.data)
        .catch((error) => {
          if (error) {
            if (error instanceof AxiosError && error.response) {
              if (error.response.status === 401) {
                setTimeout(() => {
                  toast.info("شما خارج شدید لطفا احراز هویت کنید");
                }, 400);
                navigate("/login");
              }
              if (errorHandler != undefined) {
                {
                  errorHandler(
                    error.response?.data as unknown as ErrorResponseInterface
                  );
                }
              } else {
                (
                  error.response?.data as unknown as ErrorResponseInterface
                ).error.forEach((n) => {
                  toast.error(n.message);
                });
              }
            } else toast.error("خطا در ارسال درخواست");
          }
        }),
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
        if (fetchInitial) {
          fetch.refetch();
        } else {
          setBody({ ...body, body: payload, query: query });
          setEnable(true);
        }
      },
      requestDetail: body,
      isLoading: fetch.isFetching,
    };
  }

  return {
    reFetch(payload, query) {
      if (fetchInitial) {
        fetch.refetch();
      } else {
        setBody({ ...body, body: payload, query: query });
        setEnable(true);
      }
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
  reuqestType,
}: RequestInterface<unknown, unknown>) => {
  if (method === "Post")
    if (reuqestType && reuqestType == "form-data") {
      return axios.post<TData>(url, body, {
        headers: { ...header, "Content-Type": "multipart/form-data" },
      });
    } else return axios.post<TData>(url, body, { headers: header });
  else if (method == "Get") {
    return axios.get<TData>(
      `${url}${
        query
          ? `?${Object.getOwnPropertyNames(query)
              .map((n) => `${n}=${query[n as keyof typeof query]}`)
              .join("&")}`
          : ""
      }`,
      {
        headers: header,
      }
    );
  } else if (method === "Put")
    return axios.put(url, body, {
      headers: header,
    });
  else
    return axios.delete(url, {
      headers: header,
    });
};
