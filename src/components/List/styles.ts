import styled from "styled-components";

export const ListContainer = styled.section`
    padding-bottom: 2rem;
    max-width: 92rem;

    h1 {
        font-weight: 500;
        margin-top: 4.5rem;
        margin-bottom: 3rem;
        font-size: clamp(2.5rem, 5vw, 3.2rem);
        letter-spacing: 0.25rem;
    }

    p {
        margin-left: 0.2rem;
        margin-bottom: 0.5rem;
    }
`;

export const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-right: 2rem;
    gap: 3.3rem;

    @media (max-width: 970px) {
        justify-content: space-around;
    }
`;
