export interface IHome {
    accessToken: string;
}

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

export interface IAlbumParams {
    id?: string;
}

export interface IAlbum {
    accessToken: string;
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

export interface ITracks {
    name: string;
    preview_url: string;
    id: string;
    duration_ms: number;
    artists: [{ name: string }];
}

export interface ITracksData {
    data: ITracks[];
}

export interface ISearchParams {
    search?: string;
}

export interface IBrowseSearch {
    accessToken: string;
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
    playlist?: IPlaylists[];
    artists?: IArtists[];
    recently?: IRecentlyPlayed[];
    type: string;
}
