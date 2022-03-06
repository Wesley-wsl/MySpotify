import styled from "styled-components";

import { ITheme } from "../../@types";

export const Container = styled.main`
    background-color: ${({ theme }: ITheme) => theme.primary};
    color: ${({ theme }: ITheme) => theme.color};
    padding-left: 30rem;
    min-height: 100vh;
    padding-bottom: 5rem;

    @media (max-width: 810px) {
        padding-left: 7.5rem;
    }
`;
