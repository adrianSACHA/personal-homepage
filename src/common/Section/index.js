import { Wrapper, Header, Content, Divider } from "./styled";

const Section = ({ title, body }) => (
  <Wrapper>
    <Header>{title}</Header>
    <Divider />
    <Content>{body}</Content>
  </Wrapper>
);

export default Section;
