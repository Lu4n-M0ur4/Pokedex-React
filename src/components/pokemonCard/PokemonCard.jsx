/* eslint-disable react/prop-types */
import bug from "../../assets/pokemon-types/bug.png";
import dark from "../../assets/pokemon-types/dark.png";
import dragon from "../../assets/pokemon-types/dragon.png";
import eletric from "../../assets/pokemon-types/eletric.png";
import fairy from "../../assets/pokemon-types/fairy.png";
import fighting from "../../assets/pokemon-types/fighting.png";
import fire from "../../assets/pokemon-types/fire.png";
import flying from "../../assets/pokemon-types/flying.png";
import ghost from "../../assets/pokemon-types/ghost.png";
import grass from "../../assets/pokemon-types/grass.png";
import ground from "../../assets/pokemon-types/ground.png";
import ice from "../../assets/pokemon-types/ice.png";
import normal from "../../assets/pokemon-types/normal.png";
import poison from "../../assets/pokemon-types/poison.png";
import psychic from "../../assets/pokemon-types/psychic.png";
import rock from "../../assets/pokemon-types/rock.png";
import stell from "../../assets/pokemon-types/steel.png";
import water from "../../assets/pokemon-types/water.png";
import CardMedia from "@mui/material/CardMedia";
// import Bulba from "../../assets/Bulba.png";
import {
  AtributesCard,
  InfosContainer,
  PowerInfo,
  CardActions,
  CardContainer,
  CardGlobal,
  ButtonContainer,
  ButtonDetailStyle,
  ButtonCaptureStyle,

} from "./style";

import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToPokeDetail } from "../../routes/Cordinator";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function PokemonCard({
  getDetail,
  storagePokedex,
  pokeStorageDetail,
  removePokedex,
  // pokedex,

}) {
  const [pokemon, setPokemon] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    getDetailPokemon();
  }, [pokemon]);

  const getDetailPokemon = async () => {
    try {
      const response = await axios.get(getDetail);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonTypes = useCallback(
    (type) => {
      switch (type) {
        case "poison":
          return poison;
        case "grass":
          return grass;
        case "fire":
          return fire;
        case "flying":
          return flying;
        case "water":
          return water;
        case "bug":
          return bug;
        case "normal":
          return normal;
        case "dark":
          return dark;
        case "dragon":
          return dragon;
        case "eletric":
          return eletric;
        case "fairy":
          return fairy;
        case "fighting":
          return fighting;
        case "ghost":
          return ghost;
        case "ground":
          return ground;
        case "ice":
          return ice;
        case "psychic":
          return psychic;
        case "rock":
          return rock;
        case "stell":
          return stell;
      }
    },
    [pokemon]
  );

  const getColors = useCallback(
    (type) => {
      switch (type) {
        case "poison":
          return "#AD61AE";
        case "grass":
          return "#729F92";
        case "fire":
          return "#EAAB7D";
        case "flying":
          return "#6892B0";
        case "water":
          return "#71C3FF";
        case "bug":
          return "#76A866";
        case "normal":
          return "#BF9762";
        case "dark":
          return "#5C5365";
        case "dragon":
          return "#004170";
        case "eletric":
          return "#F4D23B";
        case "fairy":
          return "#EC8FE6";
        case "fighting":
          return "#CE4069";
        case "ghost":
          return "#5269AC";
        case "ground":
          return "#D97745";
        case "ice":
          return "#74CEC0";
        case "psychic":
          return "#F67176";
        case "rock":
          return "#C7B78B";
        case "stell":
          return "#BBBBBB";
      }
    },
    [pokemon]
  );

  const getTypes = (request) =>
    request?.types?.map((type) => {
      return (
        <PowerInfo key={type.slot}>
          <img src={getPokemonTypes(type?.type.name)} alt="Atributos" />
        </PowerInfo>
      );
    });

  const getCardConditions = () => {
    if (window.location.href.includes("/storage")) {
      return (
        <>
          <CardGlobal>
            <CardContainer
              sx={{
                backgroundColor: getColors(
                  pokeStorageDetail?.types?.[0].type.name
                ),
              }}
            >
              <InfosContainer>
                <Typography variant="body2" gutterBottom>
                  {`#${pokeStorageDetail.id}`}
                </Typography>
                <Typography variant="h4">{pokeStorageDetail.name}</Typography>
                <AtributesCard>{getTypes(pokeStorageDetail)}</AtributesCard>
              </InfosContainer>
              <CardActions>
                <CardMedia
                  sx={{ height: 193, width: 193 }}
                  component="img"
                  src={
                    pokeStorageDetail.sprites?.other["official-artwork"]
                      .front_default
                  }
                  title="Pokemon"
                />
              </CardActions>

              <ButtonContainer>
                <Button
                  onClick={() =>
                    goToPokeDetail(navigate, pokeStorageDetail.name)
                  }
                  size="small"
                >
                  Detail
                </Button>
                <Button
                  size="small"
                  onClick={() => removePokedex(pokeStorageDetail)}
                  color="error"
                  variant="contained"
                >
                  Excluir
                </Button>
              </ButtonContainer>
            </CardContainer>
          </CardGlobal>
        </>
      );
    } else {
      return (
        <>
          <CardGlobal>
            <Box>
              <CardContainer
                sx={{
                  backgroundColor: getColors(pokemon?.types?.[0].type.name),
                }}
              >
                <InfosContainer>
                  <Typography variant="body2" gutterBottom>
                    {`#${pokemon.id}`}
                  </Typography>
                  <Typography variant="h4">{pokemon.name}</Typography>
                  <AtributesCard>{getTypes(pokemon)}</AtributesCard>
                </InfosContainer>
                <CardActions>
                  <CardMedia
                    sx={{ height: 193, width: 193 }}
                    component="img"
                    src={
                      pokemon.sprites?.other["official-artwork"].front_default
                    }
                    title="Pokemon"
                  />
                </CardActions>
                <ButtonContainer>
                  <ButtonDetailStyle
                    onClick={() => {
                      goToPokeDetail(navigate, pokemon.name);
                    }}
                    size="small"
                    color="primary"
                  >
                    Detalhes!
                  </ButtonDetailStyle>
                  <ButtonCaptureStyle
                    variant="contained"
                    onClick={() => {
                      storagePokedex(pokemon);
                    }}
                    size="small"
                    color="inherit"
                  >
                    Capturar!
                  </ButtonCaptureStyle>
                </ButtonContainer>

                
              </CardContainer>
            </Box>
          </CardGlobal>
        </>
      );
    }
  };

  return <>{getCardConditions()}</>;
}
