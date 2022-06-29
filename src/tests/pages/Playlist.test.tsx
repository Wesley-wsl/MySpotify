import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { GetServerSidePropsContext } from "next";

import Playlist, { getServerSideProps } from "../../pages/playlist/[id]";
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
                query: {
                    id: "Id",
                },
            };
        },
    };
});

describe("Playlist page", () => {
    it("Shouldn't be able to render the playlist if data is not found.", () => {
        server.use(
            rest.get(`${baseURL}playlists/*`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
        );

        render(<Playlist accessToken="accessToken" />);

        const name = screen.queryByText("blackbear");
        expect(name).not.toBeInTheDocument();
    });

    it("Should be able to render with a image fake if playlist don't have a image.", async () => {
        server.use(
            rest.get(`${baseURL}playlists/*`, (req, res, ctx) => {
                return res(
                    ctx.status(200),
                    ctx.json({
                        images: [],
                        name: "blackbear",
                        followers: { total: 900 },
                        tracks: [],
                    }),
                );
            }),
        );
        render(<Playlist accessToken="accessToken" />);

        const name = await screen.findByText("blackbear");
        const image = screen.queryByAltText("Artist image");

        expect(name).toBeInTheDocument();
        expect(image).not.toBeInTheDocument();
    });

    it("Should render Playlist page with your data.", async () => {
        render(<Playlist accessToken="accessToken" />);

        const name = await screen.findByText("blackbear");
        expect(name).toBeInTheDocument();
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
