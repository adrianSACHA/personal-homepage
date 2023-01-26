import myImage from "./myImage.jpeg";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 66px;
  margin: 80px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: auto;
    align-items: stretch;
    gap: 6px;
    margin: 20px 0 0 0;
  }
`;

export const ImageOfMe = styled.div`
  background-image: url(${myImage});
  width: 390px;
  height: 390px;
  object-fit: fill;
  background-size: contain;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
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

export const StyledButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  max-width: 180px;
  height: 49px;
  background: ${({ theme }) => theme.color.buttonBackground};
  border: 1px solid ${({ theme }) => theme.color.dividerBackground};
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.buttonText};
  font-weight: 600;
  font-size: 21px;
  line-height: 24px;
  text-decoration: none;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }
  &:active {
    box-shadow: inset 0px 2px 0px #14462033;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 138px;
    min-height: 46px;
    background: ${({ theme }) => theme.color.buttonBackground};
    font-size: 18px;
    line-height: 22px;
  }
`;
