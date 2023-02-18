import { StyledButtonLink } from "../../../ButtonLink";
import { ReactComponent as Danger } from "./warning.svg";
import { Header, Memo, Wrapper } from "./styled";
import { githubUsername } from "../../githubUsername";

export const Error = () => (
  <Wrapper>
    <Danger />
    <Header>Ooops! Something went wrong...</Header>
    <Memo>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </Memo>
    <StyledButtonLink
      href={`https://github.com/${githubUsername}`}
      title={`github.com/${githubUsername}`}
      target={"_blank"}
      rel="noreferrer"
    >
      Go&nbsp;to&nbsp;Github
    </StyledButtonLink>
  </Wrapper>
);
