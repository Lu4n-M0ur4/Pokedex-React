import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardGlobal = styled(Box)`
  flex: 1 0 0;
  height: 263px;

  display: flex;
  flex-direction: column-reverse;
`;
export const CardContainer = styled(Box)`
  display: flex;
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
    color: #black;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  button {
    align-self: self-start;
    font-size: 16px;
    padding-top: 46px;
    width: 74px;
    height: 24px;
    color: #fff;

    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
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
  padding: 5px 8px;
  align-items: flex-start;
  gap: 17px;
  height: auto;
  width: auto;

  border-radius: 8px;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  background: #ad61ae;
`;
export const CardActions = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    z-index: 2;
    display: flex;
    margin: -68px;
  }
  button {
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
  }
`;
