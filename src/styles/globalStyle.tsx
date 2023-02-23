import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const DefaultTheme = {
  primaryColor: '#002F52',
};
