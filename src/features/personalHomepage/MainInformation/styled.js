import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: -30px; // that's height of the theme switch
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  grid-gap: 66px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
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
    line-height: 1.4;
    margin: 0 0 0 6px;
  }
`;

export const ThisIs = styled.div`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: initial;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondText};
  margin: 0;
`;

export const HeaderMemo = styled.h1`
  max-width: 415px;
  font-weight: 900;
  font-size: 38px;
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-width: 340px;
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Memo = styled.p`
  max-width: 650px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.secondText};
  margin: 29px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-width: 570px;
    font-size: 14px;
    margin: 16px 0 24px 0;
  }
`;
