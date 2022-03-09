import { render, screen } from "@testing-library/react";

import Player from "../Player";

describe("Player component", () => {
    it("Should render the Player component correctly", () => {
        render(<Player />);

        expect(screen.getByTestId("player")).toBeInTheDocument();
    });
});
