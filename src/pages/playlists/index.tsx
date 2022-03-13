import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import React from "react";

import { IPageProps } from "../../@types";
import List from "../../components/List";
import { useFetch } from "../../hooks/useFetch";
import { testToken } from "../../utils/testToken";

export default function Playlists({ accessToken }: IPageProps) {
    const { data, error } = useFetch("me/playlists", `${accessToken}`);

    if (error) console.log(error);

    return (
        <>
            {data && (
                <List album={data.items} type="Playlists" title="Playlists" />
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
