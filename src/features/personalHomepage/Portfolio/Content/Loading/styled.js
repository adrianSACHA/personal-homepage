import styled, { keyframes } from "styled-components";
import { ReactComponent as Circle } from "./elipse.svg";

export const Wrapper = styled.div`
  margin-top: 88px;
  display: grid;
  grid-gap: 48px;
  transition: 1s;
  text-align: center;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 20px;
    margin-top: 32px;
  }
`;

export const Memo = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 17px;
  }
`;

const rotation = keyframes`
 to {
    transform: rotate(360deg);
  }
`;

export const Icon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotation} 1.3s linear infinite;
`;

export const Elipse = styled(Circle)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 60px;
  }
`;
