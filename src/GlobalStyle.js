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
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.whiteLilac};
    word-break: break-word;

;
  }
`;
