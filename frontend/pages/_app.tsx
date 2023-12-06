import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { usePreserveScroll } from "@/hooks/usePreserveScroll";
import { Provider } from "react-redux";
import { store } from "../store";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  usePreserveScroll();
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </Provider>
    </>
  );
}
