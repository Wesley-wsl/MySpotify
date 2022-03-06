import React from "react";

import { IList } from "../../@types";
import Card from "../Card";
import * as S from "./styles";

const List: React.FC<IList> = ({
    title,
    artists,
    album,
    myAlbum,
    playlist,
    recently,
    type,
}) => {
    return (
        <S.ListContainer>
            <h1>
                {myAlbum?.length === 0 || artists?.length === 0
                    ? "You don&apos;t have albums saved."
                    : title}
            </h1>

            {artists && (
                <S.List>
                    {artists.map((element, index) => (
                        <Card key={index} data={element} type={type} />
                    ))}
                </S.List>
            )}

            {album && (
                <S.List>
                    {album.map((element, index) => (
                        <Card key={index} data={element} type={type} />
                    ))}
                </S.List>
            )}

            {recently && (
                <S.List>
                    {recently.map((element, index) => (
                        <Card
                            key={index}
                            data={element.track.album}
                            type={type}
                        />
                    ))}
                </S.List>
            )}

            {playlist && (
                <S.List>
                    {playlist.map((element, index) => (
                        <Card key={index} data={element} type={type} />
                    ))}
                </S.List>
            )}

            {myAlbum && (
                <S.List>
                    {myAlbum.map((element, index) => (
                        <Card key={index} data={element.album} type={type} />
                    ))}
                </S.List>
            )}
        </S.ListContainer>
    );
};

export default List;
