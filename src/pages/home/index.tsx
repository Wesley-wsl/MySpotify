import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";

import { IPageProps } from "../../@types";
import List from "../../components/List";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { testToken } from "../../utils/testToken";

export default function Home({ accessToken }: IPageProps) {
    const { data: releases } = useFetch(
        "browse/new-releases?limit=12",
        `${accessToken}`,
    );

    const { data: recentlyPlayed } = useFetch(
        "me/player/recently-played?limit=4",
        `${accessToken}`,
    );

    return (
        <>
            {recentlyPlayed && releases ? (
                <>
                    <List
                        recently={recentlyPlayed.items}
                        type="Albums"
                        title="Recently Played"
                    />
                    <List
                        album={releases.albums.items}
                        type="Albums"
                        title="Releases"
                    />
                </>
            ) : (
                <Loading />
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
