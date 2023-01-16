import styled from "styled-components";
import { ReactComponent as Logo } from "./GitHub.svg";

export const Wrapper = styled.section`
  display: flex;
  max-width: 1216px;
  flex-direction: column;
  align-items: center;
  min-height: 448px;
`;

export const StyledLogo = styled.a`
  cursor: pointer;
`;

export const GitHubLogo = styled(Logo)`
  fill: #0366d6;
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 32px;
    height: 32px;
  }
`;

export const StyledHeader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 0.05em;
  color: #252525;
  margin: 12.98px 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin: 0 0 24px 0;
  letter-spacing: 0.05em;
  color: #252525;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 17px;
    line-height: 140%;
  }
`;
