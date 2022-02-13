import { render, screen } from "@testing-library/react";

import Main from "../Main";

describe("<Main />", () => {
    it("should render the heading", () => {
        render(<Main />);

        expect(
            screen.getByRole("heading", {
                name: /Nextjs/i,
            }),
        ).toBeInTheDocument();
    });
});
