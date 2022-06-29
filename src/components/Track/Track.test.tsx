import { fireEvent, render, screen } from "@testing-library/react";

import Track from ".";
import { PlayerProvider } from "../../contexts/Player";
import { playlisTrack, tracksData } from "../../tests/mocks/constants";

describe("Track component", () => {
    it("Should render the Track component", () => {
        render(<Track />);

        expect(screen.getByText("Title")).toBeInTheDocument();
    });

    it("Should render the playlist informations", () => {
        render(<Track playlist={playlisTrack} />);

        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("Should render the data informations", () => {
        render(<Track data={tracksData} />);

        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });

    it("should be able to play a music coming data.", () => {
        render(
            <PlayerProvider>
                <Track data={tracksData} />
            </PlayerProvider>,
        );

        const play = screen.getByLabelText("Play");

        expect(screen.getByText("blackbear")).toBeInTheDocument();
        expect(play).toBeInTheDocument();

        fireEvent.click(play);

        expect(screen.queryByLabelText("Play")).not.toBeInTheDocument();
        expect(screen.getByLabelText("Pause")).toBeInTheDocument();
    });

    it("should be able to play a music coming playlist.", () => {
        render(
            <PlayerProvider>
                <Track playlist={playlisTrack} />
            </PlayerProvider>,
        );

        const play = screen.getByLabelText("Play");

        expect(screen.getByText("blackbear")).toBeInTheDocument();
        expect(play).toBeInTheDocument();

        fireEvent.click(play);

        expect(play).not.toBeInTheDocument();
        expect(screen.getByLabelText("Pause")).toBeInTheDocument();
    });
});
