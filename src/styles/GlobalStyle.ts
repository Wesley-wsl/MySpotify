import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --dark-primary: #000;
    --dark-secoundary: #040404;
    --dark-green-primary: #1DB954;
    --dark-green-secoundary: #1DB95415;
    --white-primary: #FFFFFF;
    --white-secoundary: #f1f1f1;
    --grey-primary: #646464;
    --grey-secoundary: #c4c4c4;
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

ul {
    list-style: none;
}

* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

*::-webkit-scrollbar {
  width: 0.9rem;
}

*::-webkit-scrollbar-track {
  background: var(--dark-secoundary);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--white-secoundary);
  border-radius: 1.5rem;
}

`;

export default GlobalStyles;
