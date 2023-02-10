import styled, { css } from "styled-components";
import { ReactComponent as Sun } from "./icon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;
  margin: 80px 0 40px 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 24px 0 0px 0;
  }
`;

export const SwitcherText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondText};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const Switcher = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.switcherBackground};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.color.secondText};
  width: 48px;
  height: 26px;
  padding: 0;
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow},
    0px 16px 58px ${({ theme }) => theme.color.shadow};
  cursor: pointer;
`;

export const Icon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.color.secondText};
  border-radius: 50%;
  margin: 2px;
  transition: 0.5s ease;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(22px);
    `}
`;

export const Sunny = styled(Sun)`
  fill: ${({ theme }) => theme.color.mainBackgroundColor};
`;
