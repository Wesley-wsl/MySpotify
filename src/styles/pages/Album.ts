import styled from "styled-components";

export const Container = styled.main`
    background-color: var(--dark-secoundary);
    color: var(--white-secoundary);
    padding-left: 24rem;
    min-height: 100vh;

    @media (max-width: 810px) {
        padding-left: 0;
    }
`;

export const Track = styled.div`
    padding-left: 10rem;
`;
