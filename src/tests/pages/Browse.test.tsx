import { screen, render } from "@testing-library/react";
import { GetServerSidePropsContext } from "next";

import BrowseSearch, { getServerSideProps } from "../../pages/browse/[search]";
import DashboardTemplate from "../../templates/Dashboard";

jest.mock("next-auth/react", () => {
    return {
        useSession() {
            return {
                data: {
                    expires: "",
                    accessToken: "",
                    user: {
                        name: "Jorkis",
                        email: "jorkis@gmail.com",
                        image: "https://i.scdn.co/image/ab6775700000ee8518fe447fac315f236ce0bb52",
                    },
                },
            };
        },
        getSession: jest
            .fn()
            .mockResolvedValueOnce({ accessToken: "accessToken" })
            .mockResolvedValueOnce(false),
        signIn: jest.fn(),
    };
});

jest.mock("../../utils/testToken", () => {
    return {
        testToken: jest
            .fn()
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false),
    };
});

jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                query: {
                    search: "Search",
                },
            };
        },
    };
});

describe("Browse page", () => {
    it("Should render Browse page", () => {
        render(
            <DashboardTemplate>
                <BrowseSearch accessToken="accessToken" />
            </DashboardTemplate>,
        );

        const Navigation = screen.getByText("Home");
        const Search = screen.getByPlaceholderText("Search");

        expect(Navigation).toBeInTheDocument();
        expect(Search).toBeInTheDocument();
    });

    it("getServerSideProps should be able to return a default props if user is authenticated.", async () => {
        const ctx = {};

        const response = await getServerSideProps(
            ctx as GetServerSidePropsContext,
        );

        expect(response).toEqual({
            props: {
                accessToken: "accessToken",
            },
        });
    });

    it("getServerSideProps should be able to return a redirect props if user isn't authenticated.", async () => {
        const ctx = {};

        const response = await getServerSideProps(
            ctx as GetServerSidePropsContext,
        );

        expect(response).toEqual({
            redirect: {
                destination: "/",
                permanent: false,
            },
        });
    });
});
