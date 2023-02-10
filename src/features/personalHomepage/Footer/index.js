import {
  Item,
  Link,
  Memo,
  Social,
  StyledLogo,
  StyledParagraph,
  Wrapper,
} from "./styled";
import { email } from "../email";
import { socialsData } from "./Social/socialData";

const Footer = () => (
  <Wrapper>
    <StyledParagraph>Let's talk!</StyledParagraph>
    <Link href={`mailto:${email}`} title={email} rel="noreferrer">
      {email}
    </Link>
    <Memo>
      I'm happy to help, always seeking for solutions. Open to new projects. If
      you have a website, dashboard or mobile app in mind and need some help to
      make your ideas come to life, feel free to contact me.
    </Memo>
    <Social>
      {socialsData.map(({ name, url, Icon }) => (
        <Item key={name}>
          <StyledLogo href={url} title={name} target="_blank" rel="noreferrer">
            <Icon />
          </StyledLogo>
        </Item>
      ))}
    </Social>
  </Wrapper>
);
export default Footer;
