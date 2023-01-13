import styled from "styled-components";

export const Sections = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 1216px;
  min-height: 304px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const List = styled.header`
  align-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.whiteLilac};
  padding: 5px 5px 5px 20px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`;

export const Header = styled.h2`
  padding: 20px 0px;
  margin: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: left;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Content = styled.div`
  padding: 0 20px 15px 20px;
`;
