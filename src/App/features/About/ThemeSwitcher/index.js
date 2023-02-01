import { useDispatch, useSelector } from "react-redux";
import { Icon, Sunny, Switcher, SwitcherText, Wrapper } from "./styled";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector();
};

const changeTheme = () => dispatch(switchTheme());

const ThemeSwitcher = () => (
  <Wrapper>
    <SwitcherText>dark mode {!darkTheme ? "OFF" : "ON"}</SwitcherText>
    <Switcher>
      <Icon>
        <Sunny />
      </Icon>
    </Switcher>
  </Wrapper>
);
export default ThemeSwitcher;
