import { api } from "../services/api";

export async function testToken(accessToken: string) {
    const testToken = await api
        .get("me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        .then(() => true)
        .catch(() => false);

    return testToken;
}
