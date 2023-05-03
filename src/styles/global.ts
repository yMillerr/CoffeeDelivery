import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;

    background: ${(props) => props.theme.background};

    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  h1, h2 {
    font-family: 'Baloo 2';
  }
`
