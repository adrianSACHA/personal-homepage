import { StyledList, StyledUlist } from "./styled";

const Skills = ({ skills }) => (
  <StyledUlist>
    {skills.map(({ content }) => (
      <StyledList key={content}>{content}</StyledList>
    ))}
  </StyledUlist>
);

export default Skills;
