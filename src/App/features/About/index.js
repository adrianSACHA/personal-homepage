import { Content, HeaderMemo, ImageOfMe, Memo, StyledButton, StyledParagraph, Wrapper } from "./styled";
import { ReactComponent as Message } from "./message.svg";

const About = () => (
  <Wrapper>
    <ImageOfMe />
    <Content>
    <StyledParagraph>This is</StyledParagraph>
    <HeaderMemo>
      Adrian Sachajdakiewicz
    </HeaderMemo>
    <Memo>
      I'm always open to new projects whenever I have the time. If you have a
      website, dashboard or mmobile app in mind and need some help to make your
      ideas come to life, feel free to contact me.
    </Memo>
    <StyledButton>
      <Message /> Hire Me
    </StyledButton>
    </Content>
  </Wrapper>
);
export default About;
