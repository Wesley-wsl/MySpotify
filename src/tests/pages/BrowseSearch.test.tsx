import { screen, render } from "@testing-library/react";

import Browse from "../pages/browse";

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

describe("BrowseSearch page", () => {
    it("Should render BrowseSearch page", () => {
        render(<Browse />);

        const RecentlyPlayed = screen.getByPlaceholderText("Search");

        expect(RecentlyPlayed).toBeInTheDocument();
    });
});
