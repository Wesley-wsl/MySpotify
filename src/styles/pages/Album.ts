import styled from "styled-components";

import { ITheme } from "../../@types";

export const Container = styled.main`
    background-color: ${({ theme }: ITheme) => theme.primary};
    color: ${({ theme }: ITheme) => theme.color};
    padding-left: 20rem;
    min-height: 100vh;

    @media (max-width: 810px) {
        padding-left: 0;
    }
`;

export const Track = styled.div`
    padding-left: 10rem;
`;
