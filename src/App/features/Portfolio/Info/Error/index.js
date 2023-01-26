import { StyledButton } from "../../../About/styled";
import { ReactComponent as Danger } from "./Danger.svg";
import { Header, Memo, Wrapper } from "./styled";

export const Error = () => (
  <Wrapper>
    <Danger />
    <Header>Ooops! Something went wrong...</Header>
    <Memo>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </Memo>
    <StyledButton>Go{" "}to{" "}Github</StyledButton>
  </Wrapper>
);
