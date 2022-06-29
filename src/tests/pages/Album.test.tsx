import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { GetServerSidePropsContext } from "next";

import Album, { getServerSideProps } from "../../pages/album/[id]";
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

describe("Album page", () => {
    it("Shouldn't be able to render the album page with data if request was bad.", async () => {
        server.use(
            rest.get(`${baseURL}albums/*`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
        );

        render(<Album accessToken="accessToken" />);

        const albumImage = screen.queryByAltText("Album image");
        const albumName = screen.queryByText("blackbear");

        expect(albumImage).not.toBeInTheDocument();
        expect(albumName).not.toBeInTheDocument();
    });

    it("Should render Album page with your informations.", async () => {
        render(<Album accessToken="accessToken" />);

        const albumImage = await screen.findByAltText("Album image");
        const albumName = await screen.findByText("blackbear");

        expect(albumImage).toBeInTheDocument();
        expect(albumName).toBeInTheDocument();
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
