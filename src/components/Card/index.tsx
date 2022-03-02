import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ICard } from "../../@types";
import * as S from "./styles";

const Card: React.FC<ICard> = ({ data, type }) => {
    return (
        <>
            {type === "Artists" && data && (
                <Link href={`/artist/${data.id}`} passHref>
                    <S.Container>
                        {data.images[0] && data.images[0].url && data ? (
                            <div>
                                <Image
                                    src={data.images[0]?.url}
                                    width={200}
                                    height={200}
                                    alt={`Artist ${data.name} image`}
                                    className="border_radius"
                                />
                            </div>
                        ) : (
                            <div className="FakeImageBorder" />
                        )}

                        <S.TitleArtists>{data.name}</S.TitleArtists>
                    </S.Container>
                </Link>
            )}
            {type === "Albums" && data && (
                <Link href={`/album/${data.id}`} passHref>
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
            {type === "Playlists" && data && (
                <Link href={`/playlist/${data.id}`} passHref>
                    <S.Container>
                        {data.images[0] && data.images[0].url && data ? (
                            <Image
                                src={data.images[0]?.url}
                                width={190}
                                height={190}
                                alt={`Playlist ${data.name} image`}
                            />
                        ) : (
                            <div className="FakeImage" />
                        )}

                        <S.Title>{data.name}</S.Title>
                    </S.Container>
                </Link>
            )}
            {type === "MyAlbums" && data && (
                <Link href={`/album/${data.id}`} passHref>
                    <S.Container>
                        {data.images[0] && data.images[0].url && data ? (
                            <Image
                                src={data.images[0]?.url}
                                width={190}
                                height={190}
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
