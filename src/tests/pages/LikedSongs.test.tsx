import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { GetServerSidePropsContext } from "next";

import LikedSongs, { getServerSideProps } from "../../pages/liked-songs";
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

describe("LikedSongs page", () => {
    it("Shouldn't be able to render the liked songs if data is not found.", async () => {
        server.use(
            rest.get(`${baseURL}me/tracks`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
        );

        render(<LikedSongs accessToken="accessToken" />);

        const title = screen.getByText("Liked Songs");
        const name = screen.queryByText("Tuono");

        expect(title).toBeInTheDocument();
        expect(name).not.toBeInTheDocument();
    });

    it("Should render LikedSongs page with data correctly", async () => {
        render(<LikedSongs accessToken="accessToken" />);

        const title = screen.getByText("Liked Songs");
        const name = await screen.findAllByText("Tuono");

        expect(title).toBeInTheDocument();
        expect(name[0]).toBeInTheDocument();
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
