import { signOut } from "next-auth/react";

import { api } from "../services/api";

export async function testToken(accessToken: string) {
    const testToken = await api.get("me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!testToken) {
        signOut();
        return false;
    }

    return true;
}
