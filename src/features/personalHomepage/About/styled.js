import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  grid-gap: 66px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 20px 0 0 0;
    justify-content: stretch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto;
    grid-gap: 6px;
    max-width: 100%;
  }
`;

export const ImageOfMe = styled.img`
  max-width: 100%;
  object-fit: fill;
  background-size: contain;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 132.67px;
    height: 132.67px;
  }
`;

export const Content = styled.div`
  max-width: 633px;
  min-height: 247px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 100%;
    min-height: 96px;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    margin: 0 0 0 6px;
  }
`;

export const StyledParagraph = styled.p`
  max-width: 176px;
  min-height: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondText};
  margin: 6px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 100%;
    height: 16px;
  }
`;

export const HeaderMemo = styled.p`
  max-width: 415px;
  min-height: 46px;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  margin: 6px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-width: 340px;
    min-height: 27px;
    font-size: 22px;
    line-height: 27px;
  }
`;

export const Memo = styled.p`
  max-width: 633px;
  min-height: 57px;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.secondText};
  margin: 29px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-width: 100%;
    min-height: 96px;
    font-size: 17px;
    margin: 16px 0 24px 0;
  }
`;