import { render, screen } from "@testing-library/react";

import List from "../List";

describe("List component", () => {
    it("Should render albums correctly", () => {
        render(
            <List
                title="Albums"
                album={[
                    {
                        artists: [{ name: "blackbear" }],
                        name: "blackbear",
                        release_date: "release",
                        images: [{ url: "", height: 200, width: 200 }],
                        id: "id",

                        tracks: {
                            items: [
                                {
                                    name: "preview",
                                    preview_url: "preview_url",
                                    id: "preview",
                                    duration_ms: 2000,
                                    artists: [{ name: "preview" }],
                                },
                            ],
                        },
                    },
                ]}
                type={"Albums"}
            />,
        );

        expect(screen.getByText("Albums")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render artists correctly", () => {
        render(
            <List
                title="Artists"
                artists={[
                    {
                        followers: { total: 100 },
                        images: [{ url: "" }],
                        name: "blackbear",
                        genres: ["songs"],
                        id: "id",
                        uri: "uri",
                    },
                ]}
                type={"Artists"}
            />,
        );

        expect(screen.getByText("Artists")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render myAlbums correctly", () => {
        render(
            <List
                title="myAlbum"
                myAlbum={[
                    {
                        album: {
                            artists: [{ name: "blackbear" }],
                            name: "blackbear",
                            release_date: "release",
                            images: [{ url: "", height: 200, width: 200 }],
                            id: "id",

                            tracks: {
                                items: [
                                    {
                                        name: "preview",
                                        preview_url: "preview_url",
                                        id: "preview",
                                        duration_ms: 2000,
                                        artists: [{ name: "preview" }],
                                    },
                                ],
                            },
                        },
                    },
                ]}
                type={"MyAlbums"}
            />,
        );

        expect(screen.getByText("myAlbum")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render playlist correctly", () => {
        render(
            <List
                title="playlist"
                playlist={[
                    {
                        name: "blackbear",
                        images: [{ url: "", height: 200, width: 200 }],
                        id: "id",
                        uri: "uri",
                        tracks: [
                            {
                                name: "cool",
                                preview_url: "preview_url",
                                id: "id",
                                duration_ms: 2000,
                                artists: [{ name: "blackbear" }],
                            },
                        ],
                        owner: { display_name: "blackbear" },
                    },
                ]}
                type={"Playlists"}
            />,
        );

        expect(screen.getByText("playlist")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render recently played correctly", () => {
        render(
            <List
                title="recently"
                recently={[
                    {
                        track: {
                            album: {
                                id: "id",
                                name: "blackbear",
                                artists: [{ name: "blackbear" }],
                                images: [{ url: "" }],
                            },
                            name: "blackbear",
                            artists: ["blackbear"],
                        },
                    },
                ]}
                type={"Albums"}
            />,
        );

        expect(screen.getByText("recently")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });
});
