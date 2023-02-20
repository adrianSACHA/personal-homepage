import {
  GitHubLogo,
  StyledHeader,
  StyledLogo,
  StyledParagraph,
  Wrapper,
} from "./styled";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRepos,
  selectRepos,
  selectReposStatus,
} from "../../personalHomepageSlice";
import { Content } from "../Portfolio/Content";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(selectRepos);
  const reposStatus = useSelector(selectReposStatus);

  useEffect(() => {
    dispatch(fetchRepos(githubUsername));
  }, [dispatch]);

  return (
    <Wrapper>
      <StyledLogo
        target="_blank"
        rel="noreferrer"
        href={`https://github.com/${githubUsername}`}
      >
        <GitHubLogo />
      </StyledLogo>
      <StyledHeader>Portfolio</StyledHeader>
      <StyledParagraph>My recent projects</StyledParagraph>
      <Content status={reposStatus} repositories={repositories} />
    </Wrapper>
  );
};
export default Portfolio;
