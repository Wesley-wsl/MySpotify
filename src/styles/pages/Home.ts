import styled from "styled-components";

export const Container = styled.main`
    background-color: var(--dark-secoundary);
    color: var(--white-secoundary);
    padding-left: 34rem;
    min-height: 100vh;
`;

export const Recently = styled.section`
    padding-bottom: 2rem;
    h1 {
        margin-top: 5rem;
        margin-bottom: 3rem;
        font-size: 2.6rem;
        font-weight: 300;
    }

    p {
        margin-left: 0.2rem;
        margin-bottom: 0.5rem;
    }
`;

export const Releases = styled.section`
    padding-bottom: 3rem;
    max-width: 84rem;
    padding-right: 1rem;
    h1 {
        margin-bottom: 3rem;
        font-size: 2.6rem;
        font-weight: 300;
    }

    p {
        margin-left: 0.2rem;
        margin-bottom: 0.5rem;
    }
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
`;
