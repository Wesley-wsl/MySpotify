import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

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
  background: #040404;
}

*::-webkit-scrollbar-thumb {
  background-color: #f1f1f1;
  border-radius: 1.5rem;
}

`;

export default GlobalStyles;
