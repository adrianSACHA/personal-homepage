import {
  Link,
  Memo,
  Social,
  StyledParagraph,
  Wrapper,
} from "./styled";
import { email } from "../../../features/email";
import { socialsData } from "./Social/socialData";

const Footer = () => (
  <Wrapper>
    <StyledParagraph>Let's talk!</StyledParagraph>
    <Link href={`mailto:${email}`} title={email} rel="noopener noreferrer">
      asachajdakiewicz@gmail.com
    </Link>
    <Memo>
      I'm happy to help, always seeking for solutions. Open to new projects. If
      you have a website, dashboard or mobile app in mind and need some help to
      make your ideas come to life, feel free to contact me.
    </Memo>
    <Social>
     {socialsData.map(({name, url, Icon}) => (

     
      <Icon />
      ))}
    </Social>
  </Wrapper>
);
export default Footer;
