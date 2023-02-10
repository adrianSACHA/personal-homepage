import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/ThemeSwitcher/themeSlice";
import { Normalize } from "styled-normalize";
import { Homepage } from "../../features/personalHomepage";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
