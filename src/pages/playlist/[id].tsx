import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import React from "react";

import { IIdParams, IPageProps } from "../../@types";
import Loading from "../../components/Loading";
import Track from "../../components/Track";
import { useFetch } from "../../hooks/useFetch";
import { Container } from "../../styles/pages/Artist";
import * as S from "../../styles/shared";
import { testToken } from "../../utils/testToken";

export default function Playlist({ accessToken }: IPageProps) {
    const router = useRouter();
    const { id }: IIdParams = router.query;

    const { data, error } = useFetch(`/playlists/${id}`, accessToken);

    if (error) console.log(error);
    console.log(data);

    return (
        <Container>
            <S.Banner>
                {data ? (
                    <S.Informations>
                        {data.images[0] && data.images[0].url ? (
                            <Image
                                src={`${data.images[0].url}`}
                                width={170}
                                height={170}
                                alt="Artist image"
                            />
                        ) : (
                            <div className="FakeImage" />
                        )}

                        <div>
                            <h1> {data.name}</h1>
                            <p>
                                {Number(data.followers.total).toLocaleString()}{" "}
                                Seguidores
                            </p>
                        </div>
                    </S.Informations>
                ) : (
                    <Loading />
                )}
            </S.Banner>
            {data && <Track playlist={data.tracks.items} />}
        </Container>
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
