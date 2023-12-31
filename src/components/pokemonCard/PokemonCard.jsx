/* eslint-disable react/prop-types */
import bug from "../../assets/pokemon-types/bug.png";
import dark from "../../assets/pokemon-types/dark.png";
import dragon from "../../assets/pokemon-types/dragon.png";
import electric from "../../assets/pokemon-types/electric.png";
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
import Pokedex from "../../assets/pokedex.png";
import CardMedia from "@mui/material/CardMedia";

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
  ButtonDeleteStyle,
  PokemonName,
} from "./style";

import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToPokeDetail } from "../../routes/Cordinator";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "../../globalContext/GlobalContext";

export default function PokemonCard({ getDetail, pokeStorageDetail }) {
  const context = useContext(GlobalContext);
  const { removePokedex, storagePokedex } = context;

  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
   getDetail && getDetailPokemon();
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
        case "electric":
          return electric;
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
          return "#977198";
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
          return "#002540";
        case "electric":
          return "#fff4b7";
        case "fairy":
          return "#EC8FE6";
        case "fighting":
          return "#de829c";
        case "ghost":
          return "#7c92d4";
        case "ground":
          return "#edb69b";
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
                <PokemonName variant="h4">{pokeStorageDetail.name}</PokemonName>
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
                <CardMedia
                  sx={{ height: 258.733, width: 258.733, p: 0 }}
                  style={{ margin: "-151px", zIndex: "1" }}
                  component="img"
                  src={Pokedex}
                  title="Pokemon"
                />
              </CardActions>

              <ButtonContainer>
                <ButtonDetailStyle
                  onClick={() =>
                    goToPokeDetail(navigate, pokeStorageDetail.name)
                  }
                  size="small"
                >
                  Detalhes
                </ButtonDetailStyle>
                <ButtonDeleteStyle
                  size="small"
                  onClick={() => removePokedex(pokeStorageDetail)}
                  style={{ zIndex: "8" }}
                  color="error"
                  variant="contained"
                >
                  Excluir
                </ButtonDeleteStyle>
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
                  <PokemonName variant="h4">{pokemon.name}</PokemonName>
                  <AtributesCard>{getTypes(pokemon)}</AtributesCard>
                </InfosContainer>
                <CardActions>
                  <CardMedia
                    sx={{ height: 193, width: 193 }}
                    style={{ zIndex: "4" }}
                    component="img"
                    src={
                      pokemon.sprites?.other["official-artwork"].front_default
                    }
                    title="Pokemon"
                  />
                  <CardMedia
                    sx={{ height: 258.733, width: 258.733, p: 0 }}
                    style={{ margin: "-151px", zIndex: "1" }}
                    component="img"
                    src={Pokedex}
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
                    Detalhes
                  </ButtonDetailStyle>
                  <ButtonCaptureStyle
                    variant="contained"
                    style={{ zIndex: "8" }}
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
