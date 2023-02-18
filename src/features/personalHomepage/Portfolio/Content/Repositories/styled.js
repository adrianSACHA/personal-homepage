import styled from "styled-components";

export const List = styled.ul`
  min-height: 322px;
  max-width: 1200px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, auto);
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const ListItem = styled.li`
  background-color: ${({ theme }) => theme.color.sectionBackgroundColor};
  border: 6px solid ${({ theme }) => theme.color.dividerBackground};
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  text-align: left;
  max-width: 100%;
  padding: 56px;
  transition: border-color 0.3s;
  color: ${({ theme }) => theme.color.mainText};

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.borderOnHover};
    box-shadow: 0px -2px 50px #090a3305, 0px 16px 58px #090a3308;
    border-radius: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 24px;
  }
`;

export const StyledHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.buttonBackground};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: auto;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.secondText};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
`;

// export const List = styled.ul`
//   list-style: none;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 25px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-left: 0;
//   color: ${({ theme }) => theme.color.secondText};
// `;

// export const ListItem = styled.li`
//   display: flex;
//   gap: 8px;
//   flex-direction: row;
//   width: 100%;
//   flex: 1;
//   align-items: center;
// `;

export const StyledName = styled.p`
  width: 120px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 100px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid #0366d6;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.buttonBackground};

  &:hover {
    border-bottom: 2px solid #2517eb;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
  }
`;
