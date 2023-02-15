import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 691px;
  margin: 10px;
`;

export const Memo = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondText};
`;

export const Link = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;
  color: ${({ theme }) => theme.color.mainText};

  &:hover {
    color: ${({ theme }) => theme.color.buttonBackground};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 18px;
    line-height: 1.4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const Social = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  max-width: 264px;
  min-height: 48px;
  margin: 50px 0;
`;

export const Item = styled.li`
  gap: 24px;
  list-style: none;
`;

export const StyledLogo = styled.a``;

export const styleIcon = (Icon) => styled(Icon)`
  fill: ${({ theme }) => theme.color.mainText};
  height: 48px;
  width: 48px;
  transition: fill 0.3s;

  &:hover {
    fill: ${({ theme }) => theme.color.buttonBackground};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 32px;
    height: 32px;
  }
`;
