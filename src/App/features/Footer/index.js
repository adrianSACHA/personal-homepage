import { Link, Memo, StyledParagraph, Wrapper } from "./styled";
import {ReactComponent as GithubLogo} from './GitHub.svg';
import {ReactComponent as LinkedInLogo} from './LinkedIn.svg';

const Footer = () => (
  <Wrapper>
    <StyledParagraph>Let's talk!</StyledParagraph>
    <Link>asachajdakiewicz@gmail.com</Link>
    <Memo>
      I'm always open to new projects whenever I have the time. If you have a
      website, dashboard or mmobile app in mind and need some help to make your
      ideas come to life, feel free to contact me.
    </Memo>
    <div>
      <GithubLogo />
      <LinkedInLogo />
    </div>
  </Wrapper>
);
export default Footer;
