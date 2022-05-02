import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const service = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  reducerPath: "service",
  endpoints: (builder) => ({}),
});

export default service;
