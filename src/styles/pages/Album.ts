import styled from "styled-components";

import { ITheme } from "../../@types";

export const Container = styled.main`
    background-color: ${({ theme }: ITheme) => theme.primary};
    color: ${({ theme }: ITheme) => theme.color};
    min-height: 100vh;

    @media (max-width: 810px) {
        padding-left: 0;
    }
`;
