import { StyledHeader } from "./styled";
import { ThemeSwitcher } from "../../../common/ThemeSwitcher";
import MainInformation from "../MainInformation";

const Header = () => (
  <StyledHeader>
    <ThemeSwitcher />
    <MainInformation />
  </StyledHeader>
);

export default Header;
