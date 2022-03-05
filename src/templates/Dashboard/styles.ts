import styled from "styled-components";

export const Container = styled.main`
    background-color: var(--dark-secoundary);
    color: var(--white-secoundary);
    padding-left: 30rem;
    min-height: 100vh;
    padding-bottom: 5rem;

    @media (max-width: 810px) {
        padding-left: 7.5rem;
    }
`;
