import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --dark-primary: #000;
    --dark-secoundary: #060606;
    --dark-green-primary: #1DB954;
    --dark-green-secoundary: #1DB95415;
}


* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Rubik", Arial, serif, sans-serif;
}

html {
    font-size: 62.5%;
}

`;

export default GlobalStyles;
