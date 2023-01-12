import styled from "styled-components";
import { ReactComponent as Logo } from "./GitHub.svg";

export const Wrapper = styled.div`
  /* position: absolute; */
  max-width: 475px;
  min-height: 448px;
  /* left: 731px;
top: 1333px; */
`;

export const StyledLogo = styled.a``;

export const GitHubLogo = styled(Logo)`
  fill: blue;
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;
