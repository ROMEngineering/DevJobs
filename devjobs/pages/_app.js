import ErrorBoundary from "../utilityHooks/errorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Suspense } from "react";
import Loading from "../commonComponents/Loading";
import { ThemeProvider } from "next-themes";

// creating new query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading />}>
                <ErrorBoundary>
                    <Provider store={store}>
                        <ThemeProvider attribute="class">
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </Provider>
                </ErrorBoundary>
            </Suspense>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default MyApp;
