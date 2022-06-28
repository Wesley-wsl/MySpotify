import BrowseSvg from "../assets/icons/browse.svg";
import HomeSvg from "../assets/icons/home.svg";
import LikedSongsSvg from "../assets/icons/liked-songs.svg";

export const sidebarNav = [
    {
        path: "/home",
        name: "Home",
        svg: <HomeSvg aria-label="Home icon" />,
    },
    {
        path: "/browse",
        name: "Browse",
        svg: <BrowseSvg aria-label="browse icon" />,
    },
    {
        path: "/liked-songs",
        name: "Liked songs",
        svg: <LikedSongsSvg aria-label="heart icon" />,
    },
];

export const sidebarLibrary = [
    {
        path: "/recent-played",
        name: "Recent played",
    },
    {
        path: "/playlists",
        name: "Playlists",
    },
    {
        path: "/albums",
        name: "Albums",
    },
    {
        path: "/artists",
        name: "Artists",
    },
];
