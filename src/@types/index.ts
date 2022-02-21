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