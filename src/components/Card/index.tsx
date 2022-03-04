import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ICard } from "../../@types";
import * as S from "./styles";

const Card: React.FC<ICard> = ({ data, type }) => {
    function getRedirect(type: string): string | undefined {
        if (type === "Artists") return "artist";
        if (type === "Albums") return "album";
        if (type === "Playlists") return "playlist";
        if (type === "MyAlbums") return "album";
    }

    const path = getRedirect(type);

    return (
        <>
            {data && (
                <Link href={`/${path}/${data.id}`} passHref>
                    <S.Container>
                        {data.images[0] && data.images[0].url && data ? (
                            <Image
                                src={data.images[0]?.url}
                                width={200}
                                height={200}
                                alt={`Album ${data.name} image`}
                            />
                        ) : (
                            <div className="FakeImage" />
                        )}

                        <S.Title>{data.name}</S.Title>
                    </S.Container>
                </Link>
            )}
        </>
    );
};

export default Card;
