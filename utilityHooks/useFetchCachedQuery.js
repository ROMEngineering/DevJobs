import { useQueryClient } from "@tanstack/react-query";

export const useFetchCachedQuery = (name) => {
    const queryClient = useQueryClient();

    return queryClient.getQueryData(name);
};
