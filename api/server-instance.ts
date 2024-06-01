// "use server"
import { cookies } from "next/headers";

import { CustomInstanceOptions } from "./type";

export const serverInstance = async <T>({
  url,
  method,
  params,
  data,
  options,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: Record<string, any>;
  data?: Record<string, any>;
  options?: CustomInstanceOptions;
  responseType?: string;
}): Promise<T> => {
  const headers: Record<string, string> = {};

  if (options?.includeAuth) {
    const accessToken = cookies().get("access_token");
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  const response = await fetch(
    // next 서버에서 요청하기 때문에 next.config의 rewrites 없이 보내야돼서 정확한 baseUrl 기입 필요
    `${process.env.BASE_URL}${url}` + new URLSearchParams(params),
    {
      method,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  return response.json();
};

export default serverInstance;
// import Axios, { AxiosRequestConfig } from "axios";
// import Cookies from "js-cookie";

// export const SERVER_INSTANCE = Axios.create({
//   baseURL: process.env.VARIABLE_URL,
// });

// export const serverInstance = <T>(
//   config: AxiosRequestConfig,
//   options?: AxiosRequestConfig,
// ): Promise<T> => {
//   const source = Axios.CancelToken.source();
//   // const header = options && options.headers
//   // ? {
//   //       Authorization: `Bearer ${Cookies.get("access_token")}`,
//   //     } : null,

//   const promise = SERVER_INSTANCE({
//     ...config,
//     ...options,
//     cancelToken: source.token,
//   }).then(({ data }) => data);

//   // @ts-ignore
//   promise.cancel = () => {
//     source.cancel("Query was cancelled");
//   };

//   return promise;
// };