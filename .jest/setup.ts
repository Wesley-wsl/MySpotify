import "@testing-library/jest-dom";
import { server } from "../src/tests/mocks/setupServer";

beforeAll(() =>
    server.listen({
        onUnhandledRequest: "error",
    }),
);
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
