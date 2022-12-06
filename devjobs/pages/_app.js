import ErrorBoundary from "../commonComponents/errorBoundary";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/globals.css";

// creating new query client
const queryClient = new QueryClient();
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ErrorBoundary>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default MyApp;
