import styled from "styled-components";

import { ITheme } from "../../@types";

export const Container = styled.main`
    background-color: ${({ theme }: ITheme) => theme.primary};
    color: ${({ theme }: ITheme) => theme.color};
    padding-bottom: 5rem;
    min-height: 100vh;

    @media (max-width: 810px) {
        padding-left: 0;
    }
`;

export const List = styled.section`
    h2 {
        font-weight: 500;
        margin-top: 4.5rem;
        margin-bottom: 3rem;
        font-size: 3.2rem;
        letter-spacing: 0.25rem;
    }
`;
