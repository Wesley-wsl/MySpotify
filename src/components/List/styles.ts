import styled from "styled-components";

export const ListContainer = styled.section`
    padding-bottom: 2rem;
    max-width: 92rem;

    h1 {
        font-weight: 500;
        margin-top: 4.5rem;
        margin-bottom: 3rem;
        font-size: 3.2rem;
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
    flex-wrap: wrap;
    gap: 3.3rem;
`;
