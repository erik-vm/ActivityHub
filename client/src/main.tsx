import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import 'react-toastify/ReactToastify.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/layouts/router/Routes.tsx";
import "./app/layouts/styles.css";
import { store, StoreContext } from "./lib/stores/store.ts";
import {ToastContainer} from 'react-toastify'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StoreContext.Provider>
  </StrictMode>
);
