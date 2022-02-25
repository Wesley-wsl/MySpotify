import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { IAlbum } from "../../@types";
import Loading from "../../components/Loading";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Track from "../../components/Track";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/pages/Album";

export default function Album({ accessToken }: IAlbum) {
    const router = useRouter();
    const { id } = router.query;

    const { data } = useFetch(`albums/${id}`, `${accessToken}`);

    return (
        <S.Container>
            <Sidebar />
            <S.Banner>
                <Topbar />
                {data ? (
                    <>
                        <S.Informations>
                            <Image
                                src={`${data.images[0].url}`}
                                width={170}
                                height={170}
                                alt="Album image"
                            />

                            <div>
                                <h1> {data.name}</h1>
                                <p>Artist: {data.artists[0].name}</p>
                                <p>Release: {data.release_date}</p>
                            </div>
                        </S.Informations>
                        <Track data={data.tracks.items} />
                    </>
                ) : (
                    <Loading />
                )}
            </S.Banner>
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
