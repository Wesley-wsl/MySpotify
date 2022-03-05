import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";

import { PlayerContext } from "../../contexts/Player";
import * as S from "./styles";
import "react-h5-audio-player/lib/styles.css";

const Player: React.FC = () => {
    const { previewUrl } = useContext(PlayerContext);

    return (
        <S.Container previewUrl={previewUrl} data-testid="player">
            <AudioPlayer src={previewUrl} autoPlay volume={0.5} />
        </S.Container>
    );
};

export default Player;
