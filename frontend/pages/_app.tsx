import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { usePreserveScroll } from "@/hooks/usePreserveScroll";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  usePreserveScroll();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
