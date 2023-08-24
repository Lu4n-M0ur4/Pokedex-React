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
import CardMedia from "@mui/material/CardMedia";

import { styled } from "@mui/material/styles";
import {
  Box,
  Divider,
  LinearProgress,
  Typography,
  linearProgressClasses,
} from "@mui/material";
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
  SectionTitle,
  StatsContainer,
  // Power,
} from "./style";
import { useParams } from "react-router-dom";
import { BASE_URL, BASE_URL_DETAIL } from "../../utils/constans";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function PokemonDetailPage() {
  const params = useParams();
  const [pokeDetail, setPokedetail] = useState([]);

  const limitedStat = (stats) => {
    if (stats?.base_stat >= 100) {
      return 100;
    } else {
      return stats?.base_stat;
    }
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme, stats }) => ({
    height: 20,
    width: "50%",
    borderRadius: 9,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
    },

    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 9,
      backgroundColor:
        theme.palette.mode === "light" && stats.base_stat >= 50
          ? "#ecd92d"
          : "#ec8d0f",
    },
  }));

  const getStats = () =>
    pokeDetail?.stats?.map((stats, index) => {
      return (
        <>
          <StatsContainer key={index}>
            <Typography variant="h4">{stats.stat.name}</Typography>

            <Typography variant="h5">{stats.base_stat}</Typography>

            {/* <Box sx={{ flexGrow: 1 }}> */}
            <BorderLinearProgress
              stats={stats}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
              variant="determinate"
              value={limitedStat(stats)}
            />

            {/* </Box> */}
          </StatsContainer>
          <Divider sx={{margin: "0 auto", width: "90%" }} light />
        </>
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
    [pokeDetail]
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
    [pokeDetail]
  );

  const getTypes = (request) =>
    request?.types?.map((type, index) => {
      return (
        <>
          <img
            key={index}
            src={getPokemonTypes(type?.type.name)}
            alt="Atributos"
          />
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
      const response = await axios.get(
        `${BASE_URL_DETAIL}${params.pokemonName}`
      );
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
      <Typography sx={{ color: "white" }} variant="h2">
        Detalhes
      </Typography>
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
          <SectionTitle>
            <Typography variant="h5">Base Stats</Typography>
          </SectionTitle>
          <Box>{getStats()}</Box>
        </BaseStatus>
        <PokemonMovesInfoContainer>
          <PokemonContainer>
            <Typography variant="body2" gutterBottom>
              ID#{pokeDetail.id}
            </Typography>
            <Typography variant="h4">{pokeDetail.name}</Typography>
            <Atributes>{getTypes(pokeDetail)}</Atributes>
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
