import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: var(--dark-secoundary);
    padding-bottom: 8rem;

    .playing {
        background-color: var(--dark-green-secoundary);
        border-radius: 0.5rem;
        box-shadow: 0.2rem 0.2rem 1rem 0.2rem var(--dark-green-secoundary);
    }

    table {
        border-collapse: collapse;
        width: 80%;
        margin-bottom: 1rem;
        text-align: center;
        margin-left: 10rem;
        overflow: hidden;

        tr {
            border-bottom: 0.1rem solid #f1f1f144;
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
                    background-color: var(--dark-green-secoundary);
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
            }

            .selected {
                background-color: var(--dark-green-secoundary);
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
            width: 70%;
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
            /* width: 70%; */
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

    @media (max-width: 341px) {
        table {
            width: auto;

            tr {
                margin: 0;
            }
        }
    }
`;
