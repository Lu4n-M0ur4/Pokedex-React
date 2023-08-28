import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5rem;
  width: fit-content;
  padding: 0px 40px;
 
`;
export const TitleSection = styled(Typography)`
color: #FFF;
font-family: Poppins;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
 
`;
export const BoxSection = styled(Box)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 60px 0px 0px 40px;
 
`;


