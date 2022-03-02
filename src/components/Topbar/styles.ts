import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0 0;
    max-width: 90rem;
    height: 5rem;

    @media (max-width: 479px) {
        flex-direction: column;
        align-items: center;
        padding-right: 1rem;
        margin-bottom: 8rem;
        gap: 2rem;
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
        background-color: #121212;
        border-radius: 1rem;
        padding-left: 4.3rem;
        color: var(--white-secoundary);
        font-weight: 200;
        margin-right: 2rem;
        padding-right: 1rem;

        &::placeholder {
            font-size: 1.5rem;
            color: var(--white-secoundary);
            font-weight: 200;
        }
    }

    button {
        background-color: transparent;
        position: absolute;
        left: 1rem;
        top: 1.1rem;
        cursor: pointer;
    }
`;

export const Profile = styled.div`
    width: 17rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 10;

    img {
        border-radius: 50%;
    }

    p {
        color: var(--white-secoundary);
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
    background-color: #000;
    top: -0.5rem;
    left: -2rem;
    right: 0.5rem;
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
    }

    animation: Appear 0.5s ease-in-out;
`;

export const ProfileContainer = styled.div`
    position: relative;
    transition: all 0.2s linear;
    display: flex;

    @keyframes Appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
