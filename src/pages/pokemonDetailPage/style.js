import { Box, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DetailContainer = styled(Box)`
  display: flex;
  flex-direction: wrap;
  gap: 21px;
  margin: 50px 25px 163px;
  padding: 26px 44px;
  background: #000;
  border-radius: 37.886px;
  width: auto;
  height: auto;
`;

export const OverviewPokemon = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 48px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 282px;
    height: 282px;
    border-radius: 8px;
    border: 2px solid #fff;
    background: #fff;
  }
`;

export const BaseStatus = styled(Box)`
  overflow: hidden;
  border-radius: 12px;
  background: #fff;
  width: 100%;

  img {
    width: auto;
    height: auto;
  }
`;

export const PokemonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
  }
  h4{
    text-transform: capitalize;
  }
`;

export const Atributes = styled(Box)`
  display: flex;

  padding-top: 15px;
  align-items: flex-start;
  gap: 7px;
`;

export const Power = styled(Box)`
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

export const PokemonMovesInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-left: 47px;
  
  ul{
    
  
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: flex-start;
    margin: 0;
  }
`;

export const PokemonMoves = styled(Box)`
  display: flex;
  
  flex-direction: column;
  margin-top: 53px;
  padding: 18px;
  overflow: hidden;
  width: 292px;
  height: 417px;

  border-radius: 12px;
  background: #fff;
`;
export const ContainerMoves = styled(Box)`
      overflow: scroll;
      overflow-y: scroll;
      overflow-x: hidden;
    width: 292px;
    height: 390px;
`;

export const Moves = styled(Box)`
  display: flex;
  width: fit-content;
  padding: 10px;
  margin-top: 20px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 12px;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  background: #ececec;

  
`;

export const IndexContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 270px;
  justify-content: flex-start;
  align-items: center;
`;

export const PokemonZindex = styled(CardMedia)`
  width: 270px;
  height: 270px;
  z-index: 2;

  margin: -164px;
`;

