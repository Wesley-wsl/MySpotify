import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import React from "react";

import { IPageProps, ISearchParams } from "../../@types";
import List from "../../components/List";
import Loading from "../../components/Loading";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/shared";
import { testToken } from "../../utils/testToken";

export default function BrowseSearch({ accessToken }: IPageProps) {
    const router = useRouter();
    const { search }: ISearchParams = router.query;

    const { data, error } = useFetch(
        `/search?q=${search}&type=artist,album,playlist&limit=12`,
        accessToken,
    );

    if (error) console.log(error);

    return (
        <S.Container>
            <Sidebar />
            <Topbar />
            {data ? (
                <>
                    <List
                        artists={data.artists.items}
                        type="Artists"
                        title="Artists"
                    />

                    <List
                        album={data.albums.items}
                        type="Albums"
                        title="Albums"
                    />
                    <List
                        playlist={data.playlists.items}
                        type="Playlists"
                        title="Playlists"
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
