import { useDispatch, useSelector } from "react-redux";
import { Icon, Sunny, Switcher, SwitcherText, Wrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitcher = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <SwitcherText>Dark mode {isDarkTheme ? "On" : "Off"}</SwitcherText>
      <Switcher onClick={() => dispatch(toggleTheme())}>
        <Icon moveToRight={isDarkTheme}>
          <Sunny />
        </Icon>
      </Switcher>
    </Wrapper>
  );
};
