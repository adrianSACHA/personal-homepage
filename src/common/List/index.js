import { StyledList, StyledUlist } from "./styled";

const List = ({ listContent }) => (
  <StyledUlist >
    {listContent.map(({ id, content }) => (
      <StyledList key={id}>{content}</StyledList>
    ))}
  </StyledUlist>
);

export default List;
