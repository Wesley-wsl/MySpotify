import { screen, render } from "@testing-library/react";

import Sidebar from "../Sidebar";

describe("Sidebar component", () => {
    it("Should render Sidebar", () => {
        render(<Sidebar />);

        expect(screen.getByText("Home"));
    });
});
