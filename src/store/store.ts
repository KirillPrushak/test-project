import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coursesApi } from "../features/api/coursesApi";

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
});

// setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
