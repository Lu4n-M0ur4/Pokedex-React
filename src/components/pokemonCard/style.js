import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export const CardGlobal = styled(Box)`
  flex: 1 0 0;
  height: 263px;

  display: flex;
  flex-direction: column-reverse;
`;
export const CardContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 440px;
  height: 210px;
  background-color: red;
  border-radius: 12px;
`;

export const InfosContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 23px;

  p {
    color: black;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const AtributesCard = styled(Box)`
  display: flex;
  padding: 5px 8px;
  align-items: flex-start;
  gap: 7px;
`;

export const PowerInfo = styled(Box)`
  display: flex;
  padding-top: 5px;
  align-items: flex-start;
`;
export const CardActions = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    z-index: 2;
    display: flex;
    margin: -38px;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  width: 90%;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 13px;

  button {
    display: flex;
    width: 146px;
    height: 38px;
    padding: 4px 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;
export const ButtonDetailStyle = styled(Button)`
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: none;
`;
export const ButtonCaptureStyle = styled(Button)`
  display: flex;
  width: 146px;
  height: 38px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 8px;
  background: #fff;
  text-transform: none;
`;

export const ModalStyle = styled(Box)`
width: 451px;
height: 222px;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 12px;
background: #FFF;
box-shadow:none;
background-color:#fff;
opacity: 1;

display: flex;
flex-wrap: wrap;
align-items: center;
align-content: center;
justify-content: center;

`;
