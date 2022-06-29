import { screen, render, fireEvent } from "@testing-library/react";
import { GetServerSidePropsContext } from "next";
import { signIn } from "next-auth/react";

import Login, { getServerSideProps } from "../../pages";

jest.mock("next-auth/react", () => {
    return {
        getSession: jest
            .fn()
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(true),
        signIn: jest.fn(),
    };
});

jest.mock("../../utils/testToken", () => {
    return {
        testToken: jest
            .fn()
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(true),
    };
});

const loginMocked = jest.mocked(signIn);

describe("Login page", () => {
    it("Should render correctly", () => {
        render(<Login />);

        const LoginButton = screen.getByText("Login with Spotify");
        expect(LoginButton).toBeInTheDocument();
    });

    it("Should be able to make login", () => {
        render(<Login />);

        const LoginButton = screen.getByText("Login with Spotify");
        expect(LoginButton).toBeInTheDocument();

        fireEvent.click(LoginButton);
        expect(loginMocked).toHaveBeenCalled();
    });

    it("getServerSideProps should be able to return a default props if user isn't authenticated.", async () => {
        const ctx = {};

        const response = await getServerSideProps(
            ctx as GetServerSidePropsContext,
        );

        expect(response).toEqual({
            props: {},
        });
    });

    it("getServerSideProps should be able to return a redirect props if user is authenticated.", async () => {
        const ctx = {};

        const response = await getServerSideProps(
            ctx as GetServerSidePropsContext,
        );

        expect(response).toEqual({
            redirect: {
                destination: "/home",
                permanent: false,
            },
        });
    });
});
