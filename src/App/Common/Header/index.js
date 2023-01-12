import { StyledHeader } from "./styled";

const Header = ({title, content}) => (
  <StyledHeader>
    <h1>{title}</h1>
<div>{content}</div>
  </StyledHeader>
);

export default Header;