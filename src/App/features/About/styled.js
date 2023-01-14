import myImage from "./myImage.jpeg";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: auto;
    align-items: stretch;
  }
`;

export const ImageOfMe = styled.div`
  background-image: url(${myImage});
  width: 390px;
  height: 390px;
  object-fit: fill;
  background-size: contain;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 132.67px;
    height: 132.67px;
  }
`;

export const Content = styled.div`
  max-width: 633px;
  min-height: 247px;
  margin: 0 0 0 66px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
    min-height: 96px;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: #6e7e91;
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
  color: #6e7e91;
  margin: 6px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
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
  letter-spacing: 0.05em;
  color: #252525;
  margin: 6px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
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
  letter-spacing: 0.05em;
  color: #6e7e91;
  margin: 29px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    max-width: 100%;
    min-height: 96px;
    font-size: 17px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  width: 154px;
  height: 49px;
  background: #0366d6;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 24px;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }
  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 138px;
    min-height: 46px;
    background: #0366d6;
    border-radius: 4px;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
