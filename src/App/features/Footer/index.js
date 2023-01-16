import {
  GitHubLogo,
  Link,
  LinkedInLogo,
  Memo,
  Social,
  StyledLogo,
  StyledParagraph,
  Wrapper,
} from "./styled";

const Footer = () => (
  <Wrapper>
    <StyledParagraph>Let's talk!</StyledParagraph>
    <Link href="mailto:asachajdakiewicz@gmail.com">
      asachajdakiewicz@gmail.com
    </Link>
    <Memo>
      I'm happy to help, always seeking for solutions. Open to new projects. If
      you have a website, dashboard or mobile app in mind and need some help to
      make your ideas come to life, feel free to contact me.
    </Memo>
    <Social>
      <StyledLogo
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/adrianSACHA"
      >
        <GitHubLogo />
      </StyledLogo>
      <StyledLogo
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/adrian-sachajdakiewicz/"
      >
        <LinkedInLogo />
      </StyledLogo>
    </Social>
  </Wrapper>
);
export default Footer;
