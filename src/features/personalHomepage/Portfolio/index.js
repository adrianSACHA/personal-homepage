import {
  GitHubLogo,
  StyledHeader,
  StyledLogo,
  StyledParagraph,
  Wrapper,
  Repos,
} from "./styled";
import Tile from "./Tile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRepos,
  selectRepos,
  selectReposStatus,
} from "../personalHomepageSlice";
import { Error } from "./Info/Error";
import { Loading } from "./Info/Loading";

const Portfolio = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectRepos);
  const status = useSelector(selectReposStatus);
  const Status = () =>
    ({
      loading: <Loading />,
      error: <Error />,
      success: <Tile projects={projects} />,
    }[status]);
  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  return (
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
      <Repos />
      <Status />
    </Wrapper>
  );
};
export default Portfolio;
