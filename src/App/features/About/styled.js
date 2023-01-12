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
    /* position: absolute; */
    width: 132.67px;
    height: 132.67px;
    /* left: calc(50% - 132.67px / 2 - 80.33px);
    top: 32.67px; */
  }
`;

export const Content = styled.div`
  max-width: 633px;
  min-height: 247px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    /* position: absolute; */
    width: 100%;
    min-height: 96px;
    /* left: calc(50% - 275px/2 - 6.5px);
top: 245px; */

    /* Lead paragraph mobile */

    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    /* or 24px */

    letter-spacing: 0.05em;

    /* Text secondary */

    color: #6e7e91;
  }
`;

export const StyledParagraph = styled.p`
  max-width: 176px;
  min-height: 16px;
  /* top: 183px; */
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: #6e7e91;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    /* position: absolute; */
    width:100%;
    height: 16px;
    /* left: calc(50% - 43px / 2 - 122.5px); */
    /* top: 178px; */

    /* Caption */

    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    /* identical to box height, or 16px */

    text-transform: uppercase;

    /* Text secondary */

    color: #6e7e91;
  }
`;

export const Memo = styled.p`
  /* position: absolute; */
  max-width: 633px;
  min-height: 57px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #6e7e91;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    /* position: absolute; */
    max-width: 100%;
    min-height: 96px;
    /* left: calc(50% - 275px / 2 - 6.5px); */
    top: 245px;

    /* Lead paragraph mobile */

    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    /* or 24px */

    letter-spacing: 0.05em;

    /* Text secondary */

    color: #6e7e91;
  }
`;

export const HeaderMemo = styled.p`
  max-width: 415px;
  min-height: 46px;
  /* left: calc(50% - 415px/2 + 56.5px); */
  /* top: 211px; */
  font-style: normal;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: #252525;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    /* position: absolute; */
    max-width: 340px;
    min-height: 27px;
    /* left: calc(50% - 240px / 2 - 24px); */
    /* top: 202px; */

    /* H1 mobile */

    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: 0.05em;

    /* Black text */

    color: #252525;
  }
`;

export const StyledButton = styled.button`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  /* position: absolute; */
  max-width: 154px;
  min-height: 49px;
  /* left: 809px;
top: 381px; */
  background: #0366d6;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  cursor: pointer;
 color: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 12px;

    /* position: absolute; */
    max-width: 138px;
    min-height: 46px;
    /* left: calc(50% - 138px / 2 - 75px); */
    /* top: 365px; */

    /* Main blue LM */

    background: #0366d6;
    border-radius: 4px;
    /* max-width: 74px;
    min-height: 22px; */

    /* font-family: "Inter";
    font-style: normal; */
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    /* White */

    

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
