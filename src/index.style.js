import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Padauk', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 16px;
  }

  div {
    box-sizing: border-box;
    font-size: 1em;
  }
`;

export default GlobalStyle;
