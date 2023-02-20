import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
  min-height: 322px;
  max-width: 1200px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(2, auto);
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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

export const Name = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.buttonBackground};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: auto;
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-top: 24px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.secondText};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 14px;
    line-height: 1.2;
    margin-top: 16px;
  }
`;

export const StyledName = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 100px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const Links = styled.dl`
  margin-top: 24px;
  margin-bottom: 0;
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  align-items: center;
  cursor: pointer;
  padding-bottom: 1px;
  border-bottom: 1px solid ${({ theme }) => α(theme.color.mainText, 0.3)};
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.buttonBackground};

  &:hover {
    border-color: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;
