import React, { useContext } from "react";

import { ITracksData } from "../../@types";
import PauseSvg from "../../assets/icons/pause.svg";
import PlaySvg from "../../assets/icons/play.svg";
import { PlayerContext } from "../../contexts/Player";
import { getTime } from "../../utils/getTime";
import * as S from "./styles";

const Track: React.FC<ITracksData> = ({ data, playlist }) => {
    const { previewUrl, setPreviewUrl } = useContext(PlayerContext);

    return (
        <S.Container>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {playlist &&
                        playlist.map(
                            (element, index) =>
                                element.track.preview_url !== null && (
                                    <tr
                                        key={index}
                                        onClick={() =>
                                            setPreviewUrl(
                                                element.track.preview_url,
                                            )
                                        }
                                        className={
                                            previewUrl ===
                                            element.track.preview_url
                                                ? "playing"
                                                : ""
                                        }
                                    >
                                        <td>
                                            {previewUrl ===
                                            element.track.preview_url ? (
                                                <PauseSvg aria-label="Pause" />
                                            ) : (
                                                <PlaySvg aria-label="Play" />
                                            )}
                                        </td>
                                        <td>{element.track.name}</td>
                                        <td>{element.track.artists[0].name}</td>
                                        <td>
                                            {getTime(element.track.duration_ms)}
                                        </td>
                                    </tr>
                                ),
                        )}

                    {data &&
                        data.map(
                            (element, index) =>
                                element.preview_url !== null && (
                                    <tr
                                        key={index}
                                        onClick={() =>
                                            setPreviewUrl(element.preview_url)
                                        }
                                        className={
                                            previewUrl === element.preview_url
                                                ? "playing"
                                                : ""
                                        }
                                    >
                                        <td>
                                            {previewUrl ===
                                            element.preview_url ? (
                                                <PauseSvg aria-label="Pause" />
                                            ) : (
                                                <PlaySvg aria-label="Play" />
                                            )}
                                        </td>
                                        <td>{element.name}</td>
                                        <td>{element.artists[0].name}</td>
                                        <td>{getTime(element.duration_ms)}</td>
                                    </tr>
                                ),
                        )}
                </tbody>
            </table>
        </S.Container>
    );
};

export default Track;
