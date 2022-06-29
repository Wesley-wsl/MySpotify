import { screen, render } from "@testing-library/react";

import BrowseSearch from "../pages/browse/[search]";

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
    };
});

jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                query: {
                    search: "Search",
                },
            };
        },
    };
});

describe("Browse page", () => {
    it("Should render Browse page", () => {
        render(<BrowseSearch accessToken="accessToken" />);

        const Navigation = screen.getByText("Home");
        const Search = screen.getByPlaceholderText("Search");

        expect(Navigation).toBeInTheDocument();
        expect(Search).toBeInTheDocument();
    });
});
