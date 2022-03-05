import styled from "styled-components";

import { IPlayer } from "../../@types";

export const Container = styled.footer`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;

    display: ${({ previewUrl }: IPlayer) =>
        previewUrl === "" ? "none" : "block"};

    .rhap_container {
        background-color: #000;
    }

    .rhap_progress-filled,
    .rhap_progress-indicator {
        background-color: #1db954;
    }

    .rhap_time {
        color: #f1f1f1;
    }

    svg {
        color: #fff;
    }
`;
