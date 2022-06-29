import { screen, render, fireEvent } from "@testing-library/react";

import Sidebar from ".";

jest.mock("next/link", () => {
    return ({ children }: Element) => {
        return children;
    };
});

describe("Sidebar component", () => {
    it("Should render Sidebar", () => {
        render(<Sidebar />);

        expect(screen.getByLabelText("Home icon")).toBeInTheDocument();
        expect(screen.getByLabelText("browse icon")).toBeInTheDocument();
        expect(screen.getByLabelText("heart icon")).toBeInTheDocument();
        expect(
            screen.queryByLabelText("Close sidebar"),
        ).not.toBeInTheDocument();
        expect(screen.getByLabelText("Open sidebar")).toBeInTheDocument();
    });

    it("Should be able to open sidebar.", () => {
        render(<Sidebar />);

        const openSidebar = screen.getByRole("button", {
            name: "Open sidebar",
        });

        expect(openSidebar).toBeInTheDocument();

        fireEvent.click(openSidebar);

        expect(screen.queryByLabelText("Close sidebar")).toBeInTheDocument();
        expect(screen.getByTestId("overlay")).toBeInTheDocument();
    });

    it("Should be able to close sidebar on click in a nav list options.", async () => {
        render(<Sidebar />);

        const openSidebar = screen.getByRole("button", {
            name: "Open sidebar",
        });

        expect(openSidebar).toBeInTheDocument();

        fireEvent.click(openSidebar);

        const closeSidebar = screen.queryByLabelText("Close sidebar");
        const overlay = screen.getByTestId("overlay");

        expect(overlay).toBeInTheDocument();
        expect(closeSidebar).toBeInTheDocument();

        const home = screen.getByText("Home");

        expect(home).toBeInTheDocument();

        fireEvent.click(home);

        expect(overlay).not.toBeInTheDocument();
        expect(closeSidebar).not.toBeInTheDocument();
    });

    it("Should be able to close sidebar on click in library list options.", () => {
        render(<Sidebar />);

        const openSidebar = screen.getByRole("button", {
            name: "Open sidebar",
        });

        expect(openSidebar).toBeInTheDocument();

        fireEvent.click(openSidebar);

        const closeSidebar = screen.queryByLabelText("Close sidebar");
        const overlay = screen.getByTestId("overlay");

        expect(overlay).toBeInTheDocument();
        expect(closeSidebar).toBeInTheDocument();

        const recentPlayed = screen.getByText("Recent played");
        expect(recentPlayed).toBeInTheDocument();

        fireEvent.click(recentPlayed);

        expect(closeSidebar).not.toBeInTheDocument();
        expect(overlay).not.toBeInTheDocument();
    });

    it("Should be able to close sidebar on click in close icon.", () => {
        render(<Sidebar />);

        const openSidebar = screen.getByRole("button", {
            name: "Open sidebar",
        });

        expect(openSidebar).toBeInTheDocument();

        fireEvent.click(openSidebar);

        const closeSidebar = screen.getByLabelText("Close sidebar");
        const overlay = screen.getByTestId("overlay");

        expect(overlay).toBeInTheDocument();
        expect(closeSidebar).toBeInTheDocument();

        fireEvent.click(closeSidebar);

        expect(closeSidebar).not.toBeInTheDocument();
        expect(overlay).not.toBeInTheDocument();
    });

    it("Should be able to close modal on click in overlay.", () => {
        render(<Sidebar />);

        const openSidebar = screen.getByRole("button", {
            name: "Open sidebar",
        });

        expect(openSidebar).toBeInTheDocument();

        fireEvent.click(openSidebar);

        const overlay = screen.getByTestId("overlay");
        expect(overlay).toBeInTheDocument();

        fireEvent.click(overlay);

        expect(overlay).not.toBeInTheDocument();
    });
});
