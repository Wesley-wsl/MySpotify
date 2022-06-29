import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import React from "react";

import { IPageProps } from "../../@types";
import List from "../../components/List";
import { useFetch } from "../../hooks/useFetch";
import { testToken } from "../../utils/testToken";

export default function RecentPlayed({ accessToken }: IPageProps) {
    const { data } = useFetch("me/player/recently-played", `${accessToken}`);

    return (
        <>
            {data && (
                <List
                    recently={data.items}
                    type="Albums"
                    title="Recently Played"
                />
            )}
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
    const session = await getSession(ctx);
    const isValid = await testToken(`${session?.accessToken}`);

    if (!session || !isValid) {
        destroyCookie(ctx, "next-auth.session-token");

        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            accessToken: session.accessToken,
        },
    };
};
