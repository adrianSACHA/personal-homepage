import { GitHubLogo, StyledLogo, Wrapper } from "./styled";

const Portfolio = () => (
  <Wrapper>
    <StyledLogo
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/adrianSACHA"
    >
      <GitHubLogo />
    </StyledLogo>

    <h2>Portfolio</h2>
    <p>My recent projects</p>
  </Wrapper>
);
export default Portfolio;
