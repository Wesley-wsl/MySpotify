import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IPlayerContext {
    previewUrl: string;
    setPreviewUrl: Dispatch<SetStateAction<string>>;
}

interface IChildren {
    children: JSX.Element;
}

export const PlayerContext = createContext({} as IPlayerContext);

export function PlayerProvider({ children }: IChildren) {
    const [previewUrl, setPreviewUrl] = useState("");

    return (
        <PlayerContext.Provider
            value={{
                previewUrl,
                setPreviewUrl,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}
