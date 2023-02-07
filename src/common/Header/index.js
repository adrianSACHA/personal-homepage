import { StyledHeader } from "./styled";

const Header = ({ title, content }) => (
  <StyledHeader>
    {title}
    {content}
  </StyledHeader>
);

export default Header;
