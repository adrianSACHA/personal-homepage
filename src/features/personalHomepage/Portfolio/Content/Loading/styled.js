import styled, { keyframes } from "styled-components";
import { ReactComponent as Circle } from "./elipse.svg";

export const Wrapper = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  transition: 1s;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};

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
  width: 160px;
  height: 160px;
`;
