import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Create a new API instance

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "b93c8f06b8mshed1bf250d2c1121p1536afjsn4eaf20d6d7bc",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const CryptoApi = createApi({
  reducerPath: "cryptoApi", // The path to the reducer
  baseQuery: fetchBaseQuery({ baseUrl }), // The base query to use
  endpoints: (builder) => ({
    // The endpoints to create
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = CryptoApi;
