import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Bulba from "../../assets/Bulba.png";
import {
  AtributesCard,
  InfosContainer,
  PowerInfo,
  CardActions,
  CardContainer,
  CardGlobal,
} from "./style";

import Attributes from "../../assets/poison 1.png";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToPokeDetail } from "../../routes/Cordinator";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function PokemonCard({ getDetail }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    
      getDetailPokemon();
    
  }, []);

  const getDetailPokemon = async () => {
    try {
      const response = await axios.get(getDetail);
      setPokemon(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigate = useNavigate();
  const type = pokemon.types?.[0].type.name

  const getType = useCallback(() => {
    switch (type) {
      case "poison":
        return "#AD61AE";
      case "grass":
        return "#70B873";
      case "fire":
        return "##F44900";
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


  
  return (
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

          <Button onClick={() => goToPokeDetail(navigate)} size="small">
            Detail
          </Button>
        </InfosContainer>
        <CardActions>
          <CardMedia
            sx={{ height: 193, width: 193 }}
            component="img"
            src={pokemon.sprites?.other.home.front_default}
            title="Pokemon"
          />
          <Button size="small">Excluir</Button>
        </CardActions>
      </CardContainer>
    </CardGlobal>
  );
}
