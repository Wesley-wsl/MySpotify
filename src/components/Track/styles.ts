import styled from "styled-components";

import { ITheme } from "../../@types";

export const Container = styled.section`
    width: 100%;
    background-color: ${({ theme }: ITheme) => theme.primary};
    padding-bottom: 8rem;

    .playing {
        background-color: ${({ theme }: ITheme) => theme.buttonHover};
        border-radius: 0.5rem;
        box-shadow: 0.2rem 0.2rem 1rem 0.2rem
            ${({ theme }: ITheme) => theme.buttonHover};
    }

    table {
        border-collapse: collapse;
        max-width: 920px;
        width: 96%;
        margin-bottom: 1rem;
        text-align: center;
        overflow: hidden;

        tr {
            border-bottom: 0.1rem solid
                ${({ theme }: ITheme) => theme.greySecoundary};
            display: grid;
            grid-template-columns: 0.3fr 1fr 1fr 0.3fr;
            align-items: center;
            padding-left: 2rem;
        }

        thead > tr > th {
            font-size: 1.9rem;
            padding: 1rem;
        }

        tbody {
            font-size: 1.7rem;

            tr {
                cursor: pointer;
                transition: all 0.2s linear;
                &:hover {
                    background-color: ${({ theme }: ITheme) =>
                        theme.buttonHover};
                    border-radius: 1rem;
                }
            }

            td:nth-child(2) {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            td {
                padding: 1.5rem;

                svg > path {
                    fill: ${({ theme }: ITheme) => theme.color};
                }
            }

            .selected {
                background-color: ${({ theme }: ITheme) => theme.buttonHover};
                border-radius: 1rem;
            }
        }
    }

    @media (max-width: 600px) {
        table {
            tr > td:nth-child(3),
            tr > th:nth-child(3) {
                display: none;
            }

            tr {
                grid-template-columns: 0.1fr 1fr 0.1fr;
            }
        }
    }

    @media (max-width: 508px) {
        table {
            tr > th:nth-child(4),
            tr > td:nth-child(4) {
                display: none;
            }

            tr {
                grid-template-columns: 0.1fr 0.8fr;
                width: 100%;
            }
        }
    }

    @media (max-width: 483px) {
        table {
            tbody {
                font-size: 1.5rem;
            }

            tr > th:nth-child(1),
            tr > td:nth-child(1) {
                display: none;
            }

            tr {
                grid-template-columns: 1fr;
            }
        }
    }
`;
