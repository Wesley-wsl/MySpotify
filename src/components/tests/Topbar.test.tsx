import { render, screen, fireEvent } from "@testing-library/react";
import { signOut } from "next-auth/react";
import Router from "next/router";

import Topbar from "../Topbar";

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
        signOut: jest.fn(),
    };
});

jest.mock("next/router");

const signOutMocked = jest.mocked(signOut);
const routerMocked = jest.mocked(Router);

describe("Topbar component", () => {
    it("Should have a input for search", () => {
        render(<Topbar />);

        const Search = screen.getByPlaceholderText("Search");
        expect(Search).toBeInTheDocument();
    });

    it("Should be able edit input.", () => {
        render(<Topbar />);

        const Search = screen.getByPlaceholderText(
            "Search",
        ) as HTMLInputElement;

        fireEvent.change(Search, {
            target: {
                value: "blackbear",
            },
        });

        expect(Search).toBeInTheDocument();
        expect(Search.value).toEqual("blackbear");
    });

    it("Should be able search something.", () => {
        render(<Topbar />);

        const Search = screen.getByPlaceholderText(
            "Search",
        ) as HTMLInputElement;

        fireEvent.change(Search, {
            target: {
                value: "blackbear",
            },
        });

        expect(Search).toBeInTheDocument();
        expect(Search.value).toEqual("blackbear");

        fireEvent.click(screen.getByLabelText("Search icon"));

        expect(routerMocked.push).toHaveBeenCalled();
    });

    it("Should open option for log out on click in profile", () => {
        render(<Topbar />);

        const Profile = screen.getByText("Jorkis");

        fireEvent.click(Profile);

        expect(screen.getByText("Log out")).toBeInTheDocument();
    });

    it("Should be able to log out", () => {
        render(<Topbar />);

        const Profile = screen.getByText("Jorkis");

        fireEvent.click(Profile);

        const Logout = screen.getByText("Log out");

        expect(Profile).toBeInTheDocument();
        expect(Logout).toBeInTheDocument();

        fireEvent.click(Logout);

        expect(signOutMocked).toHaveBeenCalled();
    });
});
