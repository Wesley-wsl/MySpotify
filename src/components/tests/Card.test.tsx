import { render, screen } from "@testing-library/react";

import Card from "../Card";

const cardData = {
    name: "blackbear4",
    images: [{ url: "/image.png", height: 200, width: 200 }],
    id: "id",
};

describe("Card component", () => {
    it("Should render card with albums correctly but with a image fake.", () => {
        render(
            <Card
                data={{
                    ...cardData,
                    images: [{ url: "" }],
                    name: "blackbear1",
                }}
                type={"Albums"}
            />,
        );

        const fakeImage = screen.queryByTestId("fakeImage");
        expect(screen.getByText("blackbear1")).toBeInTheDocument();
        expect(fakeImage).toBeInTheDocument();
    });

    it("Should render card with Artists correctly", () => {
        render(
            <Card
                data={{ ...cardData, name: "blackbear2" }}
                type={"Artists"}
            />,
        );

        const fakeImage = screen.queryByTestId("fakeImage");
        expect(fakeImage).not.toBeInTheDocument();
        expect(screen.getByText("blackbear2")).toBeInTheDocument();
    });

    it("Should render card with Playlists correctly", () => {
        render(
            <Card
                data={{ ...cardData, name: "blackbear3" }}
                type={"Playlists"}
            />,
        );

        const fakeImage = screen.queryByTestId("fakeImage");
        expect(fakeImage).not.toBeInTheDocument();
        expect(screen.getByText("blackbear3")).toBeInTheDocument();
    });

    it("Should render card with MyAlbums correctly", () => {
        render(
            <Card
                data={{ ...cardData, name: "blackbear4" }}
                type={"MyAlbums"}
            />,
        );

        const fakeImage = screen.queryByTestId("fakeImage");
        expect(screen.getByText("blackbear4")).toBeInTheDocument();
        expect(fakeImage).not.toBeInTheDocument();
    });

    it("Should render card with type incorrect to coverage else.", () => {
        render(
            <Card
                data={{ ...cardData, name: "blackbear2" }}
                type={"dwadwako"}
            />,
        );

        const fakeImage = screen.queryByTestId("fakeImage");
        expect(fakeImage).not.toBeInTheDocument();
        expect(screen.getByText("blackbear2")).toBeInTheDocument();
    });
});
