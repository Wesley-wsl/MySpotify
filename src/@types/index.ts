export interface IHome {
    releases: IRelease[];
    recentlyPlayed: IRecentlyPlayed[];
}

export interface IRelease {
    id: string;
    name: string;
    artists: [{ name: string }];
    images: IImages[];
}

export interface IImages {
    url: string;
    height: number;
    width: number;
}

export interface ICard {
    data: IRelease;
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
    album: IAlbumData;
}

export interface IAlbumData {
    artists: [{ name: string }];
    name: string;
    release_date: string;
    images: IImages[];

    tracks: {
        items: ITracks[];
    };
}

export interface ITracks {
    name: string;
    preview_url: string;
    id: string;
    duration_ms: number;
}
