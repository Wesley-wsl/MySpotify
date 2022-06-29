import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { signOut } from "next-auth/react";
import Router from "next/router";
import { Dispatch, SetStateAction } from "react";

import Topbar from ".";
import { ThemeContext } from "../../contexts/Theme";

jest.mock("next-auth/react", () => {
    return {
        useSession: jest
            .fn()
            .mockResolvedValueOnce({
                data: {
                    expires: "",
                    accessToken: "",
                    user: {
                        name: "Jorkis",
                        email: "jorkis@gmail.com",
                        image: null,
                    },
                },
            })
            .mockReturnValue({
                data: {
                    expires: "",
                    accessToken: "",
                    user: {
                        name: "Jorkis",
                        email: "jorkis@gmail.com",
                        image: "https://i.scdn.co/image/ab6775700000ee8518fe447fac315f236ce0bb52",
                    },
                },
            }),
        signOut: jest.fn(),
    };
});

jest.mock("next/router");

const setLightModeMocked = jest.fn() as Dispatch<SetStateAction<boolean>>;

const signOutMocked = jest.mocked(signOut);
const routerMocked = jest.mocked(Router);

describe("Topbar component", () => {
    it("Should be able to render a default image if user don't have a image.", () => {
        render(<Topbar />);

        const profileIcon = screen.getByLabelText("Profile icon");
        expect(profileIcon).toBeInTheDocument();
    });

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

    it("Shouldn't be able to push to another router if don't have any value in search input.", () => {
        render(<Topbar />);

        const Search = screen.getByPlaceholderText(
            "Search",
        ) as HTMLInputElement;

        fireEvent.change(Search, {
            target: {
                value: "",
            },
        });

        expect(Search).toBeInTheDocument();
        expect(Search.value).toEqual("");

        fireEvent.click(screen.getByLabelText("Search icon"));
    });

    it("Should open option for log out on click in profile", () => {
        render(<Topbar />);

        const Profile = screen.getByText("Jorkis");

        fireEvent.click(Profile);

        expect(screen.getByText("Log out")).toBeInTheDocument();
    });

    it("Should be able to close option for log out on click in overlay.", () => {
        render(<Topbar />);

        fireEvent.click(screen.getByText("Jorkis"));

        const logout = screen.getByText("Log out");
        expect(logout).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("overlay"));

        expect(logout).not.toBeInTheDocument();
    });

    it("Should be able to active dark mode.", async () => {
        render(
            <ThemeContext.Provider
                value={{ lightMode: true, setLightMode: setLightModeMocked }}
            >
                <Topbar />
            </ThemeContext.Provider>,
        );

        const moon = screen.getByLabelText("Moon for change to dark mode.");
        const sun = screen.queryByLabelText("Sun for change to light mode.");

        expect(moon).toBeInTheDocument();
        expect(sun).not.toBeInTheDocument();

        fireEvent.click(moon);

        waitFor(() => {
            expect(
                screen.queryByLabelText("Moon for change to dark mode."),
            ).not.toBeInTheDocument();
            expect(sun).toBeInTheDocument();
            expect(setLightModeMocked).toHaveBeenCalled();
        });
    });

    it("Should be able to active light mode.", async () => {
        render(
            <ThemeContext.Provider
                value={{ lightMode: false, setLightMode: setLightModeMocked }}
            >
                <Topbar />
            </ThemeContext.Provider>,
        );

        const moon = screen.queryByLabelText("Moon for change to dark mode.");
        const sun = screen.getByLabelText("Sun for change to light mode.");

        expect(moon).not.toBeInTheDocument();
        expect(sun).toBeInTheDocument();

        fireEvent.click(sun);

        waitFor(() => {
            expect(
                screen.getByLabelText("Moon for change to dark mode."),
            ).toBeInTheDocument();
            expect(moon).toBeInTheDocument();
            expect(setLightModeMocked).toHaveBeenCalled();
        });
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
