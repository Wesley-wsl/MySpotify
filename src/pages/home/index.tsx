import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";

import { IPageProps } from "../../@types";
import List from "../../components/List";
import Loading from "../../components/Loading";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/shared";
import { testToken } from "../../utils/testToken";

export default function Home({ accessToken }: IPageProps) {
    const { data: releases, error } = useFetch(
        "browse/new-releases?limit=12",
        `${accessToken}`,
    );

    const { data: recentlyPlayed, error: recentlyError } = useFetch(
        "me/player/recently-played?limit=4",
        `${accessToken}`,
    );

    if (error || recentlyError) console.log(error, recentlyError);

    return (
        <S.Container>
            <Sidebar />
            <Topbar />

            {recentlyPlayed && releases ? (
                <>
                    <List
                        recently={recentlyPlayed.items}
                        type="Albums"
                        title="New releases"
                    />
                    <List
                        album={releases.albums.items}
                        type="Albums"
                        title="Albums"
                    />
                </>
            ) : (
                <Loading />
            )}
        </S.Container>
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
