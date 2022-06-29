import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import React from "react";

import { IPageProps } from "../../@types";
import List from "../../components/List";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { testToken } from "../../utils/testToken";

export default function Artists({ accessToken }: IPageProps) {
    const { data } = useFetch("me/following?type=artist", accessToken);

    return (
        <>
            {!data && <Loading />}

            {data && data?.artists?.items.length !== 0 && (
                <List
                    artists={data.artists.items}
                    type="Artists"
                    title="Artists that You Is Following"
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
