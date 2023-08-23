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

import { Box, Typography } from "@mui/material";
import Header from "../../components/header/Header";

import {
  Atributes,
  BaseStatus,
  ContainerMoves,
  DetailContainer,
  IndexContainer,
  Moves,
  OverviewPokemon,
  PokemonContainer,
  PokemonMoves,
  PokemonMovesInfoContainer,
  PokemonZindex,
  // Power,
} from "./style";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constans";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function PokemonDetailPage() {
  const params = useParams();
  const [pokeDetail, setPokedetail] = useState([]);

  
  const  getStats= () =>
    pokeDetail?.stats?.map((stats,index) => {
      return (
        <ul key={index}>
          <li>
            <h4>{stats.base_stat}</h4>
            <Moves>{stats.stat.name}</Moves>

          </li>
        </ul>
      );
    });
    
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
    [pokeDetail]
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
    [pokeDetail]
  );

  const getTypes = (request) =>
  request?.types?.map((type,index) => {
    return (
        <>
        <img key={index} src={getPokemonTypes(type?.type.name)} alt="Atributos" />
        </>
    );
  });


  useEffect(() => {
    if (params.pokemonName) {
      getDetailsPokemon();
    }
  }, [params]);

  const getDetailsPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${params.pokemonName}`);
      setPokedetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoves = () =>
    pokeDetail?.moves?.map((move) => {
      return (
        <ul key={move?.move.name}>
          <li>
            <Moves>{move.move.name}</Moves>
          </li>
        </ul>
      );
    });

  return (
    <>
      <Header />
      <Typography sx={{color:'white'}}variant="h2">Detalhes</Typography>
      <DetailContainer
        sx={{
          backgroundColor: getColors(pokeDetail?.types?.[0].type.name),
        }}
      >
        <OverviewPokemon>
          <Box>
            <CardMedia
              sx={{ height: 193, width: 193 }}
              component="img"
              src={pokeDetail.sprites?.front_default}
              title="Pokemon"
              alt="Pokemon"
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ height: 193, width: 193 }}
              component="img"
              src={pokeDetail.sprites?.back_default}
              title="Pokemon"
              alt="Pokemon"
            />
          </Box>
        </OverviewPokemon>
        <BaseStatus>
          <Box>
            <Typography variant="h5"></Typography>
          </Box>
          <Box>
            {getStats()}
          </Box>
        </BaseStatus>
        <PokemonMovesInfoContainer>
          <PokemonContainer>
            <Typography variant="body2" gutterBottom>
              ID#{pokeDetail.id}
            </Typography>
            <Typography variant="h4">{pokeDetail.name}</Typography>
            <Atributes>
           {getTypes(pokeDetail)}
            </Atributes>
          </PokemonContainer>
          <PokemonMoves>
            <Typography variant="h4">Moves:</Typography>
            <ContainerMoves>{getMoves()}</ContainerMoves>
          </PokemonMoves>
        </PokemonMovesInfoContainer>
        <IndexContainer>
          <PokemonZindex
            component="img"
            src={pokeDetail.sprites?.other["official-artwork"].front_default}
            title="Pokemon"
            alt="Pokemon"
          />
        </IndexContainer>
      </DetailContainer>
    </>
  );
}
