import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-secoundary);
`;

export const Login = styled.button`
    padding: 2rem;
    border-radius: 2rem;
    width: 25rem;
    background-color: var(--dark-secoundary);
    color: var(--white-primary);
    border: 1px solid var(--dark-green-primary);
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.2rem;
    box-shadow: 0 0rem 1rem 0.1rem var(--dark-green-primary);
    transition: all 0.2s linear;
    animation: Appear 1.2s cubic-bezier(1, 0.575, 0.565, 1);

    &:hover {
        color: #000;
        background-color: var(--dark-green-primary);
        transform: translateY(-0.8rem) scale(110%);
        box-shadow: 0 0 1rem var(--dark-green-primary),
            0 0 2rem var(--dark-green-primary),
            0 0 4rem var(--dark-green-primary),
            0 0 8rem var(--dark-green-primary),
            0 0 16rem var(--dark-green-primary);
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
