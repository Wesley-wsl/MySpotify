import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { IHome } from "../../@types";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { api } from "../../services/api";
import * as S from "../../styles/pages/Home";

export default function Home({ releases, recentlyPlayed }: IHome) {
    return (
        <S.Container>
            <Sidebar />
            <Topbar />

            <List
                recently={recentlyPlayed}
                type="Albums"
                title="New releases"
            />

            <List album={releases} type="Albums" title="Albums" />
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

    const recentlyPlayed = await api
        .get("me/player/recently-played?limit=4", {
            headers: {
                Authorization: `Bearer ${session.accessToken}`,
            },
        })
        .then(res => res.data.items)
        .catch(error => console.log(error.message));

    const releases = await api
        .get("browse/new-releases?limit=12", {
            headers: {
                Authorization: `Bearer ${session.accessToken}`,
            },
        })
        .then(res => res.data.albums.items)
        .catch(error => console.log(error.message));

    return {
        props: {
            releases,
            recentlyPlayed,
        },
    };
};
