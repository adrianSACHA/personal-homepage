import {
  GitHubLogo,
  StyledHeader,
  StyledLogo,
  StyledParagraph,
  Wrapper,
} from "./styled";
import Tile from "./Tile";

const Portfolio = () => (
  <Wrapper>
    <StyledLogo
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/adrianSACHA"
    >
      <GitHubLogo />
    </StyledLogo>
    <StyledHeader>Portfolio</StyledHeader>
    <StyledParagraph>My recent projects</StyledParagraph>
    <Tile /><Tile />

  </Wrapper>
);
export default Portfolio;

