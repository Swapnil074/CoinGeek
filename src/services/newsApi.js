import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Create a new API instance

var options = {
  method: "GET",
  url: "https://bing-news-search1.p.rapidapi.com/news",
  params: { safeSearch: "Off", textFormat: "Raw" },
  headers: {},
};

const newsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "b93c8f06b8mshed1bf250d2c1121p1536afjsn4eaf20d6d7bc",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const NewsApi = createApi({
  reducerPath: "newsApi", // The path to the reducer
  baseQuery: fetchBaseQuery({ baseUrl }), // The base query to use
  endpoints: (builder) => ({
    // The endpoints to create
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}&&mkt=en-IN`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = NewsApi;
