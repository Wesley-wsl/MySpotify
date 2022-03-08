import styled from "styled-components";

import { ITheme } from "../../@types";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: ITheme) => theme.primary};

    p:nth-child(2) {
        margin-top: 2rem;
    }

    p {
        color: ${({ theme }: ITheme) => theme.color};
        font-size: 1.5rem;
        opacity: 0.9;
        animation: Appear 1.2s cubic-bezier(1, 0.575, 0.565, 1);
    }
`;

export const Login = styled.button`
    padding: 2rem;
    border-radius: 2rem;
    width: 25rem;
    background-color: ${({ theme }: ITheme) => theme.secondary};
    color: ${({ theme }: ITheme) => theme.color};
    border: 1px solid ${({ theme }: ITheme) => theme.buttonHover};
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.2rem;
    box-shadow: 0 0rem 1rem 0.1rem ${({ theme }: ITheme) => theme.buttonLogin};
    transition: all 0.2s linear;
    animation: Appear 1.2s cubic-bezier(1, 0.575, 0.565, 1);

    &:hover {
        color: #000;
        background-color: ${({ theme }: ITheme) => theme.buttonLogin};
        transform: translateY(-0.8rem) scale(110%);
        box-shadow: 0rem 0rem 2rem ${({ theme }: ITheme) => theme.buttonLogin};
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
