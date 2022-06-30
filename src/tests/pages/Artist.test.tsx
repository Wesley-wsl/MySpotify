import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { GetServerSidePropsContext } from "next";

import Artist, { getServerSideProps } from "../../pages/artist/[id]";
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

describe("Artist page", () => {
    it("Shouldn't be able to render the Albums page with data if request was bad.", () => {
        server.use(
            rest.get(`${baseURL}artists/*/top-tracks`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
            rest.get(`${baseURL}artists/*/albums`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
            rest.get(`${baseURL}artists/*`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
        );

        render(<Artist accessToken="accessToken" />);

        const artistImage = screen.queryByAltText("Artist image");
        const artistName = screen.queryByText("Tuono");
        const appearOn = screen.queryByText("Appears on");
        const topTracks = screen.queryByText("Top Tracks");
        const albums = screen.queryByText("Albums");
        const singles = screen.queryByText("Singles");

        expect(artistImage).not.toBeInTheDocument();
        expect(artistName).not.toBeInTheDocument();
        expect(appearOn).not.toBeInTheDocument();
        expect(topTracks).not.toBeInTheDocument();
        expect(albums).not.toBeInTheDocument();
        expect(singles).not.toBeInTheDocument();
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
