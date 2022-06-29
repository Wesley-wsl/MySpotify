import {
    IAlbumData,
    IArtists,
    IMyAlbums,
    IPlaylists,
    IPlaylistTracks,
    IRecentlyPlayed,
    ITracks,
} from "../../@types";

export const albumList: IAlbumData[] = [
    {
        artists: [{ name: "blackbear" }],
        name: "blackbear",
        release_date: "release",
        images: [{ url: "", height: 200, width: 200 }],
        id: "id",

        tracks: {
            items: [
                {
                    name: "preview",
                    preview_url: "preview_url",
                    id: "preview",
                    duration_ms: 2000,
                    artists: [{ name: "preview" }],
                },
            ],
        },
    },
];

export const artistsList: IArtists[] = [
    {
        followers: { total: 100 },
        images: [{ url: "" }],
        name: "blackbear",
        genres: ["songs"],
        id: "id",
        uri: "uri",
    },
];

export const myAlbumList: IMyAlbums[] = [
    {
        album: {
            artists: [{ name: "blackbear" }],
            name: "blackbear",
            release_date: "release",
            images: [{ url: "", height: 200, width: 200 }],
            id: "id",

            tracks: {
                items: [
                    {
                        name: "preview",
                        preview_url: "preview_url",
                        id: "preview",
                        duration_ms: 2000,
                        artists: [{ name: "preview" }],
                    },
                ],
            },
        },
    },
];

export const playlistList: IPlaylists[] = [
    {
        name: "blackbear",
        images: [{ url: "", height: 200, width: 200 }],
        id: "id",
        uri: "uri",
        tracks: [
            {
                name: "cool",
                preview_url: "preview_url",
                id: "id",
                duration_ms: 2000,
                artists: [{ name: "blackbear" }],
            },
        ],
        owner: { display_name: "blackbear" },
    },
];

export const recentlyList: IRecentlyPlayed[] = [
    {
        track: {
            album: {
                id: "id",
                name: "blackbear",
                artists: [{ name: "blackbear" }],
                images: [{ url: "" }],
            },
            name: "blackbear",
            artists: ["blackbear"],
        },
    },
];

export const playlisTrack = [
    {
        track: {
            name: "blackbear",
            preview_url: "preview",
            id: "id",
            duration_ms: 2000,
            artists: [{ name: "any" }],
        },
    },
] as IPlaylistTracks[];

export const tracksData = [
    {
        name: "blackbear",
        preview_url: "preview",
        id: "id",
        duration_ms: 2000,
        artists: [{ name: "any" }],
    },
] as ITracks[];
