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
import * as S from "../../styles/pages/Album";
import * as SS from "../../styles/shared";
import { testToken } from "../../utils/testToken";

export default function Album({ accessToken }: IPageProps) {
    const router = useRouter();
    const { id }: IIdParams = router.query;

    const { data } = useFetch(`albums/${id}`, `${accessToken}`);

    return (
        <S.Container>
            <SS.Banner>
                {data ? (
                    <>
                        <SS.Informations>
                            <Image
                                src={`${data.images[0].url}`}
                                width={170}
                                height={170}
                                alt="Album image"
                            />

                            <div>
                                <h1>{data.name}</h1>
                                <p>Artist: {data.artists[0].name}</p>
                                <p>Release: {data.release_date}</p>
                            </div>
                        </SS.Informations>
                        <Track data={data.tracks.items} />
                    </>
                ) : (
                    <Loading />
                )}
            </SS.Banner>
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
