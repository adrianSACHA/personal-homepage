import {
  Wrapper,
  StyledHeader,
  StyledParagraph,
  List,
  ListItem,
  StyledLink,
} from "./styled";

const Tile = () => (
  <Wrapper>
    <StyledHeader>Title</StyledHeader>
    <StyledParagraph>
      {" "}
      lorem Consequat nostrud incididunt anim qui. Ullamco nisi pariatur nisi
      incididunt ipsum duis tempor cupidatat dolor. Magna quis aliqua deserunt
      anim. Nostrud pariatur Lorem cupidatat enim elit excepteur et amet id
      deserunt laborum aute. Magna ut aliqua aliqua consectetur id commodo esse
      dolor sint non cillum. Ullamco veniam est mollit officia Lorem eiusmod non
      labore. lorem lorem Project description
    </StyledParagraph>
    <List>
      <ListItem>
        <p>Demo:</p>
        <StyledLink>LINK</StyledLink>
      </ListItem>
      <ListItem>
        <p>Code:</p>
        <StyledLink>LINK</StyledLink>
      </ListItem>
    </List>
  </Wrapper>
);
export default Tile;
