import styled from "styled-components";

import { ITheme } from "../../@types";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0 0;
    max-width: 95.4rem;
    height: 5rem;

    @media (max-width: 520px) {
        flex-direction: column;
        align-items: center;
        padding-right: 1rem;
        margin-bottom: 8rem;
        gap: 2rem;
    }

    .moon {
        cursor: pointer;
        path {
            fill: #000;
        }
    }

    .sun {
        cursor: pointer;
        path {
            fill: #fff;
        }
    }
`;

export const SearchBar = styled.form`
    position: relative;
    width: 100%;
    min-width: 18rem;
    max-width: 50rem;
    margin-right: 2rem;

    @media (max-width: 460px) {
        padding-right: 1rem;

        input {
            margin-right: 0;
        }
    }

    input {
        width: 100%;
        height: 4rem;
        background-color: ${({ theme }: ITheme) => theme.thirdy};
        border-radius: 1rem;
        padding-left: 4.3rem;
        color: ${({ theme }: ITheme) => theme.color};
        font-weight: 200;
        margin-right: 2rem;
        padding-right: 1rem;

        &::placeholder {
            font-size: 1.5rem;
            color: ${({ theme }: ITheme) => theme.color};
            font-weight: 200;
        }
    }

    button {
        background-color: transparent;
        position: absolute;
        left: 1rem;
        top: 1.1rem;
        cursor: pointer;

        svg > path {
            fill: ${({ theme }: ITheme) => theme.color};
        }
    }
`;

export const Profile = styled.div`
    width: 16rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 10;
    background-color: ${({ theme }: ITheme) => theme.secondary};
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.3rem;
    border-radius: 0.7rem;
    margin-right: 1.5rem;
    img {
        border-radius: 50%;
    }

    p {
        color: ${({ theme }: ITheme) => theme.color};
        font-size: 1.5rem;
        font-weight: 200;
        margin-right: 4rem;
        margin-left: 1.5rem;
        max-width: 6rem;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    svg {
        animation: Appear 0.5s linear;
    }
`;

export const Options = styled.ul`
    position: absolute;
    background-color: ${({ theme }: ITheme) => theme.secondary};
    top: -0.5rem;
    left: -2rem;
    right: 3rem;
    z-index: 9;
    min-height: 7rem;
    border-radius: 1rem;
    display: flex;
    justify-content: flex-start;
    padding-left: 3.3rem;
    padding-top: 5rem;
    padding-bottom: 3rem;
    li {
        font-size: 1.4rem;
        cursor: pointer;
        color: ${({ theme }: ITheme) => theme.color};
    }

    animation: Appear 0.5s ease-in-out;
`;

export const ProfileContainer = styled.div`
    position: relative;
    transition: all 0.2s linear;
    display: flex;
    align-items: center;

    svg {
        margin-right: 1rem;
    }

    @keyframes Appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: transparent;
    z-index: 8;
`;
