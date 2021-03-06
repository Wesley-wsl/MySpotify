import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import React from "react";

import { IPageProps } from "../../@types";
import Track from "../../components/Track";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/pages/LikedSongs";
import { testToken } from "../../utils/testToken";

export default function LikedSongs({ accessToken }: IPageProps) {
    const { data } = useFetch("me/tracks", `${accessToken}`);

    return (
        <>
            <S.Title>Liked Songs</S.Title>
            {data && <Track playlist={data.items} />}
        </>
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
