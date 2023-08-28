import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  width: 100vmax;
  height: 160px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const ButtonDeleteStyleHeader = styled(Button)`
  display: flex;
  width: 226px;
  height: 57px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 8px;
  background: #FF6262;
  text-transform: none;
`;
export const ButtonPokedexStyleHeader = styled(Button)`
 color: #FFF;
font-family:Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;

display: flex;
width: 287px;
height: 74px;
padding: 4px 10px;
justify-content: center;
align-items: center;
flex-shrink: 0;
`;
export const ButtonStyleHeaderBackList = styled.button`
color: #1A1A1A;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: underline;

border: none;
background: none;;

display: flex;
width: 287px;
height: 74px;
padding: 4px 10px;
justify-content: center;
align-items: center;
flex-shrink: 0;
`;
