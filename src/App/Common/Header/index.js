import { StyledHeader } from "./styled";

const Header = ({ title, content }) => (
  <StyledHeader>
    <h1>{title}</h1>
    {content}
  </StyledHeader>
);

export default Header;
