import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import React from "react";

import { IPageProps } from "../../@types";
import Loading from "../../components/Loading";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Track from "../../components/Track";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/pages/Album";
import { testToken } from "../../utils/testToken";

export default function Album({ accessToken }: IPageProps) {
    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useFetch(`albums/${id}`, `${accessToken}`);

    if (error) console.log(error);

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
