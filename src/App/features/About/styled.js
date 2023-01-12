import myImage from "./myImage.jpeg";
import styled from "styled-components";

export const ImageOfMe = styled.div`
background-image: url(${myImage});
width: 390px;
height: 390px;
object-fit: fill;
background-size: contain;
border-radius: 50%;
top: 119px;

`;
