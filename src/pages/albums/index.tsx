import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { destroyCookie } from "nookies";

import { IPageProps } from "../../@types";
import List from "../../components/List";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { testToken } from "../../utils/testToken";

export default function Albums({ accessToken }: IPageProps) {
    const { data, error } = useFetch("me/albums", `${accessToken}`);

    if (error) console.log(error);

    return (
        <>
            {!data && <Loading />}

            {data && data?.items.length !== 0 && (
                <List
                    myAlbum={data.items}
                    type="MyAlbums"
                    title="Albums That You Saved"
                />
            )}
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
