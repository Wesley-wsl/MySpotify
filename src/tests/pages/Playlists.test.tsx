import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { GetServerSidePropsContext } from "next";

import Playlists, { getServerSideProps } from "../../pages/playlists";
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

describe("Playlists page", () => {
    it("Shouldn't be able to render the list if data is not found.", () => {
        server.use(
            rest.get(`${baseURL}me/playlists`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
        );

        render(<Playlists accessToken="accessToken" />);

        const name = screen.queryByText("blackbear");
        expect(name).not.toBeInTheDocument();
    });

    it("Should render Playlists page with a list of playlists.", async () => {
        render(<Playlists accessToken="accessToken" />);

        const playlists = await screen.findByText("Playlists");
        const name = await screen.findByText("blackbear");

        expect(playlists).toBeInTheDocument();
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
