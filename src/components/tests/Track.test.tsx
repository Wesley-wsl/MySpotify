import { render, screen } from "@testing-library/react";

import Track from "../Track";

describe("Track component", () => {
    it("Should render the Track component", () => {
        render(<Track />);

        expect(screen.getByText("Title")).toBeInTheDocument();
    });

    it("Should render the playlist informations", () => {
        render(
            <Track
                playlist={[
                    {
                        track: {
                            name: "blackbear",
                            preview_url: "preview",
                            id: "id",
                            duration_ms: 2000,
                            artists: [{ name: "any" }],
                        },
                    },
                ]}
            />,
        );

        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render the data informations", () => {
        render(
            <Track
                data={[
                    {
                        name: "blackbear",
                        preview_url: "preview",
                        id: "id",
                        duration_ms: 2000,
                        artists: [{ name: "any" }],
                    },
                ]}
            />,
        );

        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });
});
