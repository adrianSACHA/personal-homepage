import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  #root {
    font-family: 'Inter', sans-serif;
    justify-content: center;
    color: ${({ theme }) => theme.color.mainText};
    background-color: ${({ theme }) => theme.color.mainBackgroundColor};
    word-break: break-word;
    transition: all 0.3ms;
    letter-spacing: 0.05em;
    }

  body { 
      margin: 0;
    }

`;
