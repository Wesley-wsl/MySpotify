import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Key } from "react";

import { IHome, IRelease } from "../../@types";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { api } from "../../services/api";
import * as S from "../../styles/pages/Home";
import * as SS from "../../styles/shared";

export default function Home({ releases, recentlyPlayed }: IHome) {
    return (
        <S.Container>
            <Sidebar />
            <Topbar />

            <SS.ListContainer>
                <h1>Recently played</h1>

                <SS.List>
                    {recentlyPlayed.map((element, index) => (
                        <Card
                            key={index}
                            data={element.track.album}
                            type="Album"
                        />
                    ))}
                </SS.List>
            </SS.ListContainer>

            <SS.ListContainer>
                <h1>New releases</h1>

                <SS.List>
                    {releases.map(
                        (element: IRelease, index: Key | null | undefined) => (
                            <Card key={index} data={element} type="Album" />
                        ),
                    )}
                </SS.List>
            </SS.ListContainer>
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
