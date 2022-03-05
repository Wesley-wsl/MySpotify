import styled from "styled-components";

export const NotExists = styled.h1`
    font-size: 3rem;
    margin-top: 4.5rem;
`;

export const Banner = styled.section`
    background: linear-gradient(to bottom, #000, var(--dark-secoundary));
    width: 100%;
    height: 33rem;
    position: relative;

    > div:nth-child(1) {
        margin-left: 10rem;
    }

    img {
        border-radius: 2rem;
        filter: contrast(120%);
    }
`;

export const Informations = styled.div`
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
    @media (max-width: 940px) {
        > div > h1 {
            max-width: 30rem;
        }
    }

    @media (max-width: 606px) {
        > div > h1 {
            max-width: 20rem;
        }
    }

    @media (max-width: 525px) {
        flex-direction: column;
        align-items: center;
        height: 28rem;
        justify-content: center;
        margin-left: 6rem;

        div {
            margin-top: 0rem;
        }
    }
`;
