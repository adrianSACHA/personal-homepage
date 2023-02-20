import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    gap: 16px;
  }
`;

export const Header = styled.h3`
  font-weight: 900;
  font-size: 30px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 18px;
    line-height: 1.2;
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
