import { Icon, Sunny, Switcher, SwitcherText, Wrapper } from "./styled";

const ThemeSwitcher = () => (
  <Wrapper>
    <SwitcherText>dark mode off</SwitcherText>
    <Switcher>
      <Icon>
        <Sunny />
      </Icon>
    </Switcher>
  </Wrapper>
);
export default ThemeSwitcher;
