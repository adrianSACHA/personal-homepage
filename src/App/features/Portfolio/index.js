import {
  GitHubLogo,
  StyledHeader,
  StyledLogo,
  StyledParagraph,
  Wrapper,
} from "./styled";

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
    <div>Workin on a hook to show my repositories</div>
  </Wrapper>
);
export default Portfolio;
