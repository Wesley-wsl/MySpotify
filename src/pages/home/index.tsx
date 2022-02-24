import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { IHome } from "../../@types";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/pages/Home";

export default function Home({ accessToken }: IHome) {
    const { data: releasess, error } = useFetch(
        "browse/new-releases?limit=12",
        `${accessToken}`,
    );

    const { data: recentlyPlayed, error: recentlyError } = useFetch(
        "me/player/recently-played?limit=4",
        `${accessToken}`,
    );

    if (error || recentlyError) console.log(error, recentlyError);
    if (!releasess || !recentlyPlayed) return "Loading";

    return (
        <S.Container>
            <Sidebar />
            <Topbar />
            <List
                recently={recentlyPlayed.items}
                type="Albums"
                title="New releases"
            />

            <List album={releasess.albums.items} type="Albums" title="Albums" />
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
