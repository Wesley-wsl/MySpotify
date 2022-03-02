import { render, screen } from "@testing-library/react";

import Loading from "../Loading";

describe("Loading component", () => {
    it("Should render the Loading component", () => {
        render(<Loading />);

        expect(screen.getByTestId("Loading")).toBeInTheDocument();
    });
});
