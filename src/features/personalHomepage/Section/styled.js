import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.sectionBackgroundColor};
  max-width: 1216px;
  min-height: 209px;
  box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow},
    0px 16px 58px ${({ theme }) => theme.color.shadow};
  border-radius: 4px;
`;

export const Header = styled.h2`
  margin: 32px 0 10px 22px;
  padding: 5px 5px 5px 10px;
  justify-content: space-between;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 18px;
    line-height: 22px;
    grid-template-columns: 1fr;
    align-items: stretch;
    margin: 16px 0 10px 6px;
  }
`;

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.color.dividerBackground};
  height: 1px;
  align-items: center;
  margin: 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 16px;
  }
`;

export const Content = styled.div`
  margin: 16px 32px;
  padding: 16px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 12px 16px;
    padding: 0;
  }
`;
