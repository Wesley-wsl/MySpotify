import { render, screen } from "@testing-library/react";

import Card from "../Card";

describe("List component", () => {
    it("Should render albums correctly", () => {
        render(
            <Card
                data={{
                    name: "blackbear",
                    images: [{ url: "", height: 200, width: 200 }],
                    id: "id",
                }}
                type={"Albums"}
            />,
        );

        expect(screen.getByText("blackbear")).toBeInTheDocument();
    });
});
