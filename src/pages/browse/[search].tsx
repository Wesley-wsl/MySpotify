import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

import { IBrowseSearch, ISearchParams } from "../../@types";
import List from "../../components/List";
import Loading from "../../components/Loading";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/shared";

export default function BrowseSearch({ accessToken }: IBrowseSearch) {
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

    if (!session) {
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
