import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer, //This is the reducer path from the service
  },
});
