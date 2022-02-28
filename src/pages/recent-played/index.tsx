import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import React from "react";

import { IPageProps } from "../../@types";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/shared";
import { testToken } from "../../utils/testToken";

export default function Album({ accessToken }: IPageProps) {
    const { data, error } = useFetch(
        "me/player/recently-played",
        `${accessToken}`,
    );

    console.log(data);

    if (error) console.log(error);

    return (
        <S.Container>
            <Sidebar />
            <Topbar />

            {data && (
                <List
                    recently={data.items}
                    type="Albums"
                    title="Recently Played"
                />
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
