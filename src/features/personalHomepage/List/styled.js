import styled from "styled-components";

export const StyledUlist = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledList = styled.li`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.secondText};
  list-style: none;

  &:before {
    content: " ";
    display: inline-block;
    background-color: ${({ theme }) => theme.color.buttonBackground};
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
      width: 6px;
      height: 6px;
      margin-right: 8px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;
