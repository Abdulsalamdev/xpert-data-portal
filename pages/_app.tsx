import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ToastContainer />
        <ThemeProvider defaultTheme="system" attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
