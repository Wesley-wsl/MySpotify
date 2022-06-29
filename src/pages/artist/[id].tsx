import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import React from "react";

import { IIdParams, IPageProps } from "../../@types";
import List from "../../components/List";
import Loading from "../../components/Loading";
import Track from "../../components/Track";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/pages/Artist";
import * as SS from "../../styles/shared";
import { testToken } from "../../utils/testToken";

export default function Artist({ accessToken }: IPageProps) {
    const router = useRouter();
    const { id }: IIdParams = router.query;

    const { data } = useFetch(`artists/${id}`, `${accessToken}`);

    const { data: topTracks } = useFetch(
        `artists/${id}/top-tracks?market=BR`,
        `${accessToken}`,
    );

    const { data: single } = useFetch(
        `artists/${id}/albums?album_type=single`,
        `${accessToken}`,
    );

    const { data: album } = useFetch(
        `artists/${id}/albums?album_type=album`,
        `${accessToken}`,
    );

    const { data: appears_on } = useFetch(
        `artists/${id}/albums?album_type=appears_on`,
        `${accessToken}`,
    );

    return (
        <S.Container>
            <SS.Banner>
                {data ? (
                    <SS.Informations>
                        <Image
                            src={`${data.images[0].url}`}
                            width={170}
                            height={170}
                            alt="Artist image"
                        />

                        <div>
                            <h1> {data.name}</h1>
                            <p>
                                {Number(data.followers.total).toLocaleString()}{" "}
                                Seguidores
                            </p>
                        </div>
                    </SS.Informations>
                ) : (
                    <Loading />
                )}
            </SS.Banner>

            {topTracks && topTracks.tracks.length !== 0 && (
                <S.List>
                    <h2>Top Tracks</h2>
                    <Track data={topTracks.tracks} />
                </S.List>
            )}

            {album && album.items.length !== 0 && (
                <S.List>
                    <List album={album.items} title="Albums" type="Albums" />
                </S.List>
            )}

            {single && single.items.length !== 0 && (
                <S.List>
                    <List album={single.items} title="Singles" type="Albums" />
                </S.List>
            )}

            {appears_on && appears_on.items.length !== 0 && (
                <S.List>
                    <List
                        album={appears_on.items}
                        title="Appears on"
                        type="Albums"
                    />
                </S.List>
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
