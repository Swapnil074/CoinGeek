import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../services/cryptoApi";
import { NewsApi } from "../services/newsApi";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer, //This is the reducer path from the service
    [NewsApi.reducerPath]: NewsApi.reducer,
  },
});
