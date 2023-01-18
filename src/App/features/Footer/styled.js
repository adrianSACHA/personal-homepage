import styled from "styled-components";
import { ReactComponent as GitHub } from "./Social/GitHub.svg";
import { ReactComponent as LinkedIn } from "./Social/LinkedIn.svg";

export const Wrapper = styled.div`
  max-width: 691px;
  min-height: 282px;
  margin: 10px;
`;

export const Memo = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondText};
`;

export const Link = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.mainText};

  &:hover {
    color: ${({ theme }) => theme.color.buttonBackground};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  max-width: 264px;
  min-height: 48px;
  margin: 50px 0;
`;

export const StyledLogo = styled.a``;

export const GitHubLogo = styled(GitHub)`
  fill: ${({ theme }) => theme.color.mainText};
  height: 48px;
  width: 48px;

  &:hover {
    fill: ${({ theme }) => theme.color.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 32px;
    height: 32px;
  }
`;

export const LinkedInLogo = styled(LinkedIn)`
  fill: ${({ theme }) => theme.color.mainText};
  height: 48px;
  width: 48px;

  &:hover {
    fill: ${({ theme }) => theme.color.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 32px;
    height: 32px;
  }
`;
