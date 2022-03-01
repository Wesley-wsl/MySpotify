import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import React from "react";

import DashboardTemplate from "../../templates/Dashboard";
import { testToken } from "../../utils/testToken";

export default function Browse() {
    return <DashboardTemplate />;
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
        props: {},
    };
};
