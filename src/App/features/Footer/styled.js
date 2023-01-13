import styled from "styled-components";
import { ReactComponent as GitHub } from "./GitHub.svg";
import { ReactComponent as LinkedIn } from "./LinkedIn.svg";

export const Wrapper = styled.div`
  max-width: 691px;
  min-height: 282px;
  margin: 10px;
`;

export const Memo = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;

    /* Black text */

    color: #252525;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  text-transform: uppercase;

  /* Text secondary */

  color: #6e7e91;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    /* identical to box height, or 16px */

    text-transform: uppercase;

    /* Text secondary */

    color: #6e7e91;
  }
`;

export const Link = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  cursor: pointer;
  letter-spacing: 0.05em;
  text-decoration: none;
  /* Black text */
  color: #252525;

  &:hover {
    color: #0366d6;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.05em;

    /* Black text */

    color: #252525;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  /* position: absolute; */
  max-width: 264px;
  height: 48px;
  /* left: calc(50% - 264px/2 - 476px);
top: 2511px; */
`;

export const StyledLogo = styled.a``;

export const GitHubLogo = styled(GitHub)`
  fill: #252525;
  height: 48px;
  width: 48px;

  &:hover {
    fill: #2517eb;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;

export const LinkedInLogo = styled(LinkedIn)`
  fill: #252525;
  height: 48px;
  width: 48px;

  &:hover {
    fill: #2517eb;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;
