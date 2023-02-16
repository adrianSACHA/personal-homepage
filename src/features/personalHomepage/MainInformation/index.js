import {
  Content,
  HeaderMemo,
  ImageOfMe as Avatar,
  Memo,
  LetsTalk,
  Wrapper,
} from "./styled";
import { ReactComponent as ButtonMessage } from "./images/message.svg";
import { email } from "../email";
import AdrianSachajdakiewiczProfile from "./images/profile.jpeg";
import { StyledButtonLink } from "../ButtonLink";

const MainInformation = () => (
  <Wrapper>
    <Avatar src={AdrianSachajdakiewiczProfile} alt="Adrian Sachajdakiewicz" />
    <Content>
      <LetsTalk>This is</LetsTalk>
      <HeaderMemo>Adrian Sachajdakiewicz</HeaderMemo>
      <Memo>
        I am searching for a job as a junior front-end developer, where I will
        have the opportunity to develop and gain professional experience. I am
        an ambitious, fast-learning person who wants to constantly develop and
        learn new technologies. In my work, I would like to use my programming
        skills and creativity to create modern and aesthetic solutions for
        users.
      </Memo>
      <StyledButtonLink
        href={`mailto:${email}`}
        title={email}
        rel="noreferrer"
      >
        <ButtonMessage /> Hire&nbsp;Me
      </StyledButtonLink>
    </Content>
  </Wrapper>
);
export default MainInformation;
