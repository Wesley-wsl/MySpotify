import { screen, render, fireEvent } from "@testing-library/react";
import { signIn } from "next-auth/react";

import Login from "../pages";

jest.mock("next-auth/react", () => {
    return {
        signIn: jest.fn(),
    };
});

describe("Login page", () => {
    it("Should render correctly", () => {
        render(<Login />);

        const LoginButton = screen.getByText("Login with Spotify");

        expect(LoginButton).toBeInTheDocument();
    });

    it("Should be able to make login", () => {
        const loginMocked = jest.mocked(signIn);

        render(<Login />);

        const LoginButton = screen.getByText("Login with Spotify");

        expect(LoginButton).toBeInTheDocument();

        fireEvent.click(LoginButton);

        expect(loginMocked).toHaveBeenCalled();
    });
});
