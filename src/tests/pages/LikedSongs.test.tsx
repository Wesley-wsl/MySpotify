import { screen, render } from "@testing-library/react";

import LikedSongs from "../pages/liked-songs";

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

describe("LikedSongs page", () => {
    it("Should render LikedSongs page", () => {
        render(<LikedSongs accessToken="accessToken" />);

        const Navigation = screen.getByText("Home");
        const Search = screen.getByPlaceholderText("Search");

        expect(Navigation).toBeInTheDocument();
        expect(Search).toBeInTheDocument();
    });
});
