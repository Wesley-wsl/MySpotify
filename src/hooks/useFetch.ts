import useSWR from "swr";

import { api } from "../services/api";

export function useFetch(url: string, accessToken: string) {
    const { data, error } = useSWR(url, async url => {
        const response = await api.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    });

    return { data, error };
}
