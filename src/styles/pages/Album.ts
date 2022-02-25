import styled from "styled-components";

export const Container = styled.main`
    background-color: var(--dark-secoundary);
    color: var(--white-secoundary);
    padding-left: 24rem;
    min-height: 100vh;
`;

export const Banner = styled.section`
    background: linear-gradient(
        to bottom,
        var(--dark-green-secoundary),
        var(--dark-secoundary)
    );
    width: 100%;
    height: 33rem;

    > div:nth-child(1) {
        margin-left: 10rem;
    }

    img {
        border-radius: 2rem;
        filter: contrast(120%);
    }
`;

export const Informations = styled.section`
    display: flex;
    align-items: flex-start;
    margin-top: 4rem;
    margin-left: 10rem;
    height: 22rem;

    > div {
        margin-top: 2rem;
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 80%;

        h1,
        p {
            font-weight: 500;
            letter-spacing: 0.2rem;
            margin-top: 0.5rem;
        }

        h1 {
            font-size: 2.5rem;
            max-width: 50rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p:nth-child(2) {
            font-size: 1.5rem;
        }

        p:nth-child(3) {
            font-size: 1.2rem;
        }
    }
`;
