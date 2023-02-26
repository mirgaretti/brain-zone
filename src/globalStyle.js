import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Comfortaa';
    src: url("fonts/Comfortaa-VariableFont_wght.ttf");
    font-weight: 100;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Comfortaa';
  }
`;

