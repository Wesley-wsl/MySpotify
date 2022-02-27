import styled from "styled-components";

import { ISideBar } from "../../@types";

export const Container = styled.div`
    background-color: var(--dark-primary);
    width: 24rem;
    min-height: 100vh;
    color: var(--white-secoundary);
    padding-left: 2rem;
    font-size: 1.6rem;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 2rem;
    transition: transform 0.1s linear;
    z-index: 999;
    nav {
        padding-top: 1.4rem;
        padding-bottom: 1.3rem;

        a {
            padding-left: 2rem;
            border-radius: 0.8rem;
            width: 20rem;
            height: 5.5rem;
            transition: background-color 0.2s linear;
            text-decoration: none;
            color: var(--white-secoundary);
            svg {
                margin-right: 1.7rem;
            }
        }
    }

    svg {
        width: 2.5rem;
        height: 2.5rem;
    }

    @media (max-width: 810px) {
        transform: ${({ isOpen }: ISideBar) =>
            isOpen ? "translateX(0)" : "translateX(-100%)"};
    }
`;

export const MainNavigation = styled.nav`
    font-weight: 300;

    ul > li > a {
        display: flex;
        align-items: center;

        &:hover {
            background-color: var(--dark-green-secoundary);
        }
    }
`;

export const ListStyle = styled.ul`
    color: var(--grey-secoundary);
    li {
        padding: 1rem 0;
        max-width: 30rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        cursor: pointer;
        width: 20rem;
        transition: background-color 0.2s linear;
        color: var(--white-secoundary);
        border-radius: 0.8rem;
        &:hover {
            background-color: var(--dark-green-secoundary);
        }

        a {
            padding-right: 7.4rem;
            padding-top: 100%;
            padding-bottom: 100%;
        }
    }
`;

export const Label = styled.p`
    font-size: 1.6rem;
    color: var(--grey-secoundary);
    margin: 0.3rem 2rem;
    font-weight: 200;
`;

export const Mobile = styled.div`
    position: fixed;
    top: 0rem;
    bottom: 0;
    left: 0rem;
    padding-top: 1rem;
    background-color: #000;
    width: 5.6rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    z-index: 100;
    cursor: pointer;

    div {
        width: 2.5rem;
        height: 0.2rem;
        background-color: #f1f1f1;
        margin-bottom: 0.5rem;
    }
`;

export const Close = styled.div`
    font-size: 2rem;
    padding: 0.5rem;
    width: 90%;
    background-color: var(--dark-green-secoundary);
    color: #f1f1f1;
    border-radius: 2rem;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
        transform: scale(110%);
    }

    @media (min-width: 810px) {
        display: none;
    }
`;
