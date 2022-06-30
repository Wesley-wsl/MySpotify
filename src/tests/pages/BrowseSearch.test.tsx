import { screen, render, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { GetServerSidePropsContext } from "next";

import BrowseSearch, { getServerSideProps } from "../../pages/browse/[search]";
import { baseURL, server } from "../mocks/setupServer";

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
                query: "any",
            };
        },
    };
});

describe("BrowseSearch page", () => {
    it("Shouldn't be able to render the list if data is not found.", async () => {
        server.use(
            rest.get(`${baseURL}search`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
        );

        render(<BrowseSearch accessToken="accessToken" />);

        const artists = screen.queryByText("Artists");
        const albums = screen.queryByText("Albums");
        const playlists = screen.queryByText("Playlists");

        expect(artists).not.toBeInTheDocument();
        expect(albums).not.toBeInTheDocument();
        expect(playlists).not.toBeInTheDocument();
    });

    it("Should render BrowseSearch page with data correctly", async () => {
        render(<BrowseSearch accessToken="accessToken" />);

        waitFor(async () => {
            const artists = await screen.findByText("Artists");
            expect(artists).toBeInTheDocument();
        });

        waitFor(async () => {
            const albums = await screen.findByText("Albums");
            expect(albums).toBeInTheDocument();
        });

        waitFor(async () => {
            const playlists = screen.findByText("Playlists");
            expect(playlists).toBeInTheDocument();
        });
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
