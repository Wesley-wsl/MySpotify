import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { GetServerSidePropsContext } from "next";

import Albums, { getServerSideProps } from "../../pages/albums";
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

describe("Albums page", () => {
    it("Shouldn't be able to render the Albums page with data if request was bad.", () => {
        server.use(
            rest.get(`${baseURL}me/albums`, (req, res, ctx) => {
                return res(ctx.status(400));
            }),
        );

        render(<Albums accessToken="accessToken" />);

        const title = screen.queryByText("Albums That You Saved");
        const albumImage = screen.queryByAltText(`Album blackbear image`);
        const albumName = screen.queryByText("blackbear");

        expect(title).not.toBeInTheDocument();
        expect(albumImage).not.toBeInTheDocument();
        expect(albumName).not.toBeInTheDocument();
    });

    it("Should be able to render Album pages with your informations.", async () => {
        render(<Albums accessToken="accessToken" />);

        const albumImage = await screen.findByAltText(`Album blackbear image`);
        const albumName = await screen.findByText("blackbear");
        const title = await screen.findByText("Albums That You Saved");

        expect(title).toBeInTheDocument();
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
