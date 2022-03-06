export interface IRelease {
    id?: string;
    name: string;
    artists?: [{ name: string }];
    images: IImages[] | [{ url?: string }];
}

export interface IImages {
    url?: string;
    height: number;
    width: number;
}

export interface ICard {
    data: IRelease | IAlbumData | IPlaylists;
    type: string;
}

export interface IRecentlyPlayed {
    track: {
        album: IRelease;
        name: string;
        artists: string[];
    };
}

export interface IIdParams {
    id?: string;
}

export interface IAlbumData {
    artists: [{ name: string }];
    name: string;
    release_date: string;
    images: IImages[];
    id: string;

    tracks: {
        items: ITracks[];
    };
}

export interface IPlaylistTracks {
    track: ITracks;
}

export interface ITracks {
    name: string;
    preview_url: string;
    id: string;
    duration_ms: number;
    artists: [{ name: string }];
}

export interface ITracksData {
    data?: ITracks[];
    playlist?: IPlaylistTracks[];
}

export interface ISearchParams {
    search?: string;
}

export interface IArtists {
    followers: { total: number };
    images: [{ url: string }];
    name: string;
    genres: string[];
    id: string;
    uri: string;
}

export interface IPlaylists {
    name: string;
    images: IImages[];
    id: string;
    uri: string;
    tracks: ITracks[];
    owner: { display_name: string };
}

export interface IList {
    title: string;
    album?: IAlbumData[];
    myAlbum?: IMyAlbums[];
    playlist?: IPlaylists[];
    artists?: IArtists[];
    recently?: IRecentlyPlayed[];
    type: string;
}

export interface IMyAlbums {
    album: IAlbumData;
}

export interface IPageProps {
    accessToken: string;
}

export interface IBanner {
    type?: string;
    data: IBannerData;
}

export interface IBannerData {
    name: string;
    followers?: { total: number };
    images: [{ url: string }];
    id: string;
    release_date?: string;
    artists?: [{ name: string }];
}

export interface IPlayer {
    previewUrl: string;
}

export interface ITheme {
    theme: {
        primary: string;
        secondary: string;
        thirdy: string;
        sideBar: string;
        color: string;
        buttonLogin: string;
        buttonHover: string;
        greyPrimary: string;
        greySecoundary: string;
    };
}

export interface ISidebarContainer {
    isOpen: boolean;
}
