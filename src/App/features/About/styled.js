import myImage from "./myImage.jpeg";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const ImageOfMe = styled.div`
  background-image: url(${myImage});
  width: 390px;
  height: 390px;
  object-fit: fill;
  background-size: contain;
  border-radius: 50%;
`;

export const Content = styled.div`
  max-width: 633px;
  height: 247px;
`;

export const StyledParagraph = styled.p`
max-width: 43px;
height: 16px;
/* top: 183px; */
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 130%;
text-transform: uppercase;
color: #6E7E91;
`;

export const Memo = styled.p`
/* position: absolute; */
/* width: 633px; */
min-height: 57px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
color: #6E7E91;
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
`;

export const StyledButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 16px;
position: absolute;
width: 154px;
height: 49px;
/* left: 809px;
top: 381px; */
background: #0366D6;
border: 1px solid rgba(209, 213, 218, 0.3);
border-radius: 4px;
cursor: pointer;
`;