import { GetServerSideProps } from "next";
import { signIn, getSession } from "next-auth/react";
import { destroyCookie } from "nookies";

import * as S from "../styles/pages/Login";
import { testToken } from "../utils/testToken";

export default function Login() {
    return (
        <S.Container>
            <S.Login onClick={() => signIn("spotify")}>
                Login with Spotify
            </S.Login>
            <p>Email: Testerapp112@gmail.com</p>
            <p>Password: tester112</p>
        </S.Container>
    );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
    const session = await getSession(ctx);
    const isValid = await testToken(`${session?.accessToken}`);

    if (!isValid) {
        destroyCookie(ctx, "next-auth.session-token");
    }

    if (session) {
        return {
            redirect: {
                destination: "/home",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};
