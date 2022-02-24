import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import * as S from "../../styles/shared";

export default function Browse() {
    return (
        <S.Container>
            <Sidebar />
            <Topbar />
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
        props: {},
    };
};
