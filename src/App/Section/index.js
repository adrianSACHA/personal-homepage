import { Sections, List, Header, Content } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Sections>
    <List>
      <Header>{title}</Header>
      {extraHeaderContent}
    </List>
    <Content>{body}</Content>
  </Sections>
);

export default Section;
