import styled from "styled-components";

import { ITheme } from "../../@types";

export const Container = styled.div`
    cursor: pointer;
    margin-bottom: 4rem;
    transition: transform 0.2s linear;
    max-width: 20rem;
    &:hover {
        transform: scale(120%);
    }

    .border_radius {
        border-radius: 50%;
    }

    img {
        border-radius: 0.5rem;
        filter: contrast(120%);
    }

    p {
        text-align: center;
        max-width: 20rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .FakeImage {
        width: 20rem;
        height: 20rem;
        border-radius: 0.5rem;
        filter: contrast(120%);
        background-color: #212121;
    }

    .FakeImageBorder {
        width: 20rem;
        height: 20rem;
        filter: contrast(120%);
        background-color: #111;
        border-radius: 50%;
    }
`;

export const Title = styled.p`
    font-size: 2rem;
    margin-top: 0.5rem;
`;

export const Author = styled.p`
    font-size: 1.6rem;
    color: ${({ theme }: ITheme) => theme.greySecoundary};
`;

export const TitleArtists = styled.p`
    font-size: 2rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    text-align: center;
`;
