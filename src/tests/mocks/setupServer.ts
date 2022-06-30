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
    rest.get(`${baseURL}me/tracks`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                items: [
                    {
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
                ],
            }),
        );
    }),
    rest.get(`${baseURL}browse/new-releases`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                releases: {
                    albums: {
                        items: [
                            {
                                name: "blackbear",
                            },
                        ],
                    },
                },
            }),
        );
    }),
    rest.get(`${baseURL}me/player/recently-played`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                recentlyPlayed: {
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
                },
            }),
        );
    }),
    rest.get(`${baseURL}albums/*`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                artists: [{ name: "soft" }],
                release_date: "12/12/12",
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
    rest.get(`${baseURL}me/albums`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                items: [
                    {
                        album: {
                            artists: [{ name: "soft" }],
                            release_date: "12/12/12",
                            images: [{ url: "/image.png" }],
                            name: "blackbear",
                            followers: { total: 900 },
                        },
                    },
                ],
            }),
        );
    }),
    rest.get(`${baseURL}artists/*/top-tracks`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
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
                            artists: [{ name: "Tuono" }],
                        },
                    },
                ],
            }),
        );
    }),
    rest.get(`${baseURL}artists/*/albums`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                items: [
                    {
                        artists: [{ name: "soft" }],
                        release_date: "12/12/12",
                        images: [{ url: "/image.png" }],
                        name: "blackbear",
                        followers: { total: 900 },
                    },
                ],
            }),
        );
    }),
    rest.get(`${baseURL}artists/*`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                artists: [{ name: "soft" }],
                release_date: "12/12/12",
                images: [{ url: "/image.png" }],
                name: "blackbear",
                followers: { total: 900 },
            }),
        );
    }),
    rest.get(`${baseURL}search`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                artists: {
                    items: [
                        {
                            id: "2",
                            name: "Tuono",
                            images: [{ url: "/url.png" }],
                        },
                    ],
                },
                albums: {
                    items: [
                        {
                            id: "2",
                            name: "Tuono",
                            images: [{ url: "/url.png" }],
                        },
                    ],
                },
                playlists: {
                    items: [
                        {
                            id: "2",
                            name: "Tuono",
                            images: [{ url: "/url.png" }],
                        },
                    ],
                },
            }),
        );
    }),
    rest.get(`${baseURL}me/following`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                artists: {
                    items: [
                        {
                            id: "2",
                            name: "Tuono",
                            images: [{ url: "/url.png" }],
                        },
                    ],
                },
            }),
        );
    }),
];

export const server = setupServer(...handlers);
