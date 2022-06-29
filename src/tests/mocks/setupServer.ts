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
];

export const server = setupServer(...handlers);
