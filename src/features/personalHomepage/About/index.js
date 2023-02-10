import {
  Content,
  HeaderMemo,
  ImageOfMe,
  Memo,
  StyledButton,
  StyledParagraph,
  Wrapper,
} from "./styled";
import { ReactComponent as Message } from "./message.svg";
import { email } from "../email";
import myImage from "./myImage.jpeg";

const About = () => (
  <Wrapper>
    <ImageOfMe src={myImage} alt="Adrian Sachajdakiewicz" />
    <Content>
      <StyledParagraph>This is</StyledParagraph>
      <HeaderMemo>Adrian Sachajdakiewicz</HeaderMemo>
      <Memo>
        I am searching for a job as a junior front-end developer, where I will
        have the opportunity to develop and gain professional experience. I am
        an ambitious, fast-learning person who wants to constantly develop and
        learn new technologies. In my work, I would like to use my programming
        skills and creativity to create modern and aesthetic solutions for
        users.
      </Memo>
      <StyledButton
        href={`mailto:${email}`}
        title="Hire me"
        rel="noopener noreferrer"
      >
        <Message /> Hire Me
      </StyledButton>
    </Content>
  </Wrapper>
);
export default About;
