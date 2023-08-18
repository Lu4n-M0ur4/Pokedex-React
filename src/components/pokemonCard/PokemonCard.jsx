/* eslint-disable react/prop-types */
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// import Bulba from "../../assets/Bulba.png";
import {
  AtributesCard,
  InfosContainer,
  PowerInfo,
  CardActions,
  CardContainer,
  CardGlobal,
  ButtonContainer,
} from "./style";

import Attributes from "../../assets/poison 1.png";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToPokeDetail } from "../../routes/Cordinator";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function PokemonCard({
  getDetail,
  storagePokedex,
  pokeStorageDetail,
  removePokedex,
}) {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();




  useEffect(() => {
    getDetailPokemon();
  }, []);

  const getDetailPokemon = async () => {
    try {
      const response = await axios.get(getDetail);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const type = pokemon.types?.[0].type.name;
  const Stype = pokeStorageDetail?.types?.[0].type.name;

  const getType = useCallback(() => {
    switch (type || Stype) {
      case "poison":
        return "#AD61AE";
      case "grass":
        return "#729F92";
      case "fire":
        return "#F44900";
      case "flying":
        return "#6892B0";
      case "water":
        return "#33A4F5";
      case "bug":
        return "#316520";
      case "normal":
        return "#8A8A8A";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
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
  }, [pokemon]);

  const getCardConditions = () => {
    if (window.location.href.includes("/storage")) {
      return (
        <>
          <CardGlobal>
            <CardContainer sx={{ backgroundColor: getType() }}>
              <InfosContainer>
                <Typography variant="body2" gutterBottom>
                  {`id#${pokeStorageDetail.id}`}
                </Typography>
                <Typography variant="h4">{pokeStorageDetail.name}</Typography>
                <AtributesCard>
                  <PowerInfo>
                    <img src={Attributes} alt="Atributos" />
                    {pokeStorageDetail.types?.[0].type.name}
                  </PowerInfo>
                  <PowerInfo>
                    <img src={Attributes} alt="Atributos" />
                    {pokeStorageDetail.types?.[0].type.name}
                  </PowerInfo>
                </AtributesCard>
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
                <Button onClick={() => goToPokeDetail(navigate,pokemon.name)} size="small">
                  Detail
                </Button>
                <Button
                  size="small"
                  onClick={() => removePokedex(pokeStorageDetail)}
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
            <CardContainer sx={{ backgroundColor: getType() }}>
              <InfosContainer>
                <Typography variant="body2" gutterBottom>
                  {`id#${pokemon.id}`}
                </Typography>
                <Typography variant="h4">{pokemon.name}</Typography>
                <AtributesCard>
                  <PowerInfo>
                    <img src={Attributes} alt="Atributos" />
                    {type}
                  </PowerInfo>
                  <PowerInfo>
                    <img src={Attributes} alt="Atributos" />
                    {type}
                  </PowerInfo>
                </AtributesCard>
              </InfosContainer>
              <CardActions>
                <CardMedia
                  sx={{ height: 193, width: 193 }}
                  component="img"
                  src={pokemon.sprites?.other["official-artwork"].front_default}
                  title="Pokemon"
                />
              </CardActions>

              <ButtonContainer>
                <Button onClick={() => {goToPokeDetail(navigate,pokemon.name) }} size="small">
                  Detail
                </Button>
                <Button onClick={() => storagePokedex(pokemon)} size="small">
                  Capturar
                </Button>
              </ButtonContainer>
            </CardContainer>
          </CardGlobal>
        </>
      );
    }
  };

  return <>{getCardConditions()}</>;
}
