import { GetServerSideProps } from "next";
import { signIn, getSession } from "next-auth/react";

import * as S from "../styles/pages/Login";

export default function Login() {
    return (
        <S.Container>
            <S.Login onClick={() => signIn()}>Login with Spotify</S.Login>
        </S.Container>
    );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
    const session = await getSession(ctx);

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
