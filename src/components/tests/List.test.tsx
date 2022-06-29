import { render, screen } from "@testing-library/react";

import {
    albumList,
    artistsList,
    myAlbumList,
    playlistList,
    recentlyList,
} from "../../tests/mocks/constants";
import List from "../List";

describe("List component", () => {
    it("Should render albums correctly", () => {
        render(<List title="Albums" album={albumList} type={"Albums"} />);

        expect(screen.getByText("Albums")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render artists correctly", () => {
        render(<List title="Artists" artists={artistsList} type={"Artists"} />);

        expect(screen.getByText("Artists")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render myAlbums correctly", () => {
        render(
            <List title="myAlbum" myAlbum={myAlbumList} type={"MyAlbums"} />,
        );

        expect(screen.getByText("myAlbum")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render playlist correctly", () => {
        render(
            <List
                title="playlist"
                playlist={playlistList}
                type={"Playlists"}
            />,
        );

        expect(screen.getByText("playlist")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render recently played correctly", () => {
        render(
            <List title="recently" recently={recentlyList} type={"Albums"} />,
        );

        expect(screen.getByText("recently")).toBeInTheDocument();
        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should be able to render a default message if don't have myAlbums.", () => {
        render(<List title="myAlbum" myAlbum={[]} type={"MyAlbums"} />);

        expect(
            screen.getByText("You don&apos;t have albums saved."),
        ).toBeInTheDocument();
    });

    it("Should be able to render a default message if don't have artists.", () => {
        render(<List title="Artists" artists={[]} type={"Artists"} />);

        expect(
            screen.getByText("You don&apos;t have albums saved."),
        ).toBeInTheDocument();
    });
});
