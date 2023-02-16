import { StyledList, StyledUlist } from "./styled";

const Skills = ({ skills }) => (
  <StyledUlist>
    {skills.map(({ id, content }) => (
      <StyledList key={id}>{content}</StyledList>
    ))}
  </StyledUlist>
);

export default Skills;
