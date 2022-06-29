import { rest } from "msw";
import { setupServer } from "msw/node";

export const baseURL = "https://api.spotify.com/v1/";

const handlers = [
    rest.get(`${baseURL}me/player/recently-played`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                items: [
                    {
                        track: {
                            album: {
                                id: "1",
                                name: "blackbear",
                                artists: [{ name: "blackbear" }],
                                images: [{ url: "/image.png" }],
                            },

                            name: "blackbear",
                            artists: ["blackebar"],
                        },
                    },
                ],
            }),
        );
    }),
    rest.get(`${baseURL}me/playlists`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                items: [
                    {
                        images: [{ url: "/image.png" }],
                        name: "blackbear",
                        artists: ["blackebar"],
                    },
                ],
            }),
        );
    }),
    rest.get(`${baseURL}playlists/*`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                images: [{ url: "/image.png" }],
                name: "blackbear",
                followers: { total: 900 },
                tracks: [
                    {
                        items: {
                            track: {
                                name: "Tuono",
                                preview_url: "/url.mp4",
                                id: "2",
                                duration_ms: 2000,
                                artists: [{ name: "Tuono" }],
                            },
                            images: [{ url: "/image.png" }],
                            name: "blackbear",
                            artists: ["blackebar"],
                        },
                    },
                ],
            }),
        );
    }),
];
export const server = setupServer(...handlers);
