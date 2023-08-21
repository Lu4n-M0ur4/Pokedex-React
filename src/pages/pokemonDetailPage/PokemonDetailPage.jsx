import { Box, CardMedia, Typography } from "@mui/material";
import Header from "../../components/header/Header";

import {
  Atributes,
  BaseStatus,
  DetailContainer,
  IndexContainer,
  Moves,
  OverviewPokemon,
  PokemonContainer,
  PokemonMoves,
  PokemonMovesInfoContainer,
  PokemonZindex,
  Power,
} from "./style";
import Stats from "../../assets/stats.png";
import Attributes from "../../assets/poison 1.png";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constans";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PokemonDetailPage() {
  const params = useParams()
  const [pokeDetail, setPokedetail] = useState([])

  useEffect(()=>{
    
    
    if(params.pokemonName){
      getDetailsPokemon()
    }
    

  },[params])


  const getDetailsPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${params.pokemonName}`);
     setPokedetail(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Header />
      <Typography variant="h2">Detalhes</Typography>
      <DetailContainer>
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
            <CardMedia
              sx={{ height: 193, width: 193 }}
              component="img"
              src={Stats}
              title="Pokemon"
              alt="Pokemon"
            />
          </Box>
        </BaseStatus>
        <PokemonMovesInfoContainer>
          <PokemonContainer>
            <Typography variant="body2" gutterBottom>
              ID#{pokeDetail.id}
            </Typography>
            <Typography variant="h4">{pokeDetail.name}</Typography>
            <Atributes>
              <Power>
                <img src={Attributes} alt="Atributos" />
                poison
              </Power>
              <Power>
                <img src={Attributes} alt="Atributos" />
                water
              </Power>
            </Atributes>
          </PokemonContainer>
          <PokemonMoves>
            <Typography variant="h4">Moves:</Typography>
            <Moves>Razor Wind</Moves>
            <Moves>Razor Wind</Moves>
            <Moves>Razor Wind</Moves>
            <Moves>Razor Wind</Moves>
          </PokemonMoves>
        </PokemonMovesInfoContainer>
        <IndexContainer>
          <PokemonZindex
            component="img"
            src={pokeDetail.sprites?.other["official-artwork"]
            .front_default}
            title="Pokemon"
            alt="Pokemon"
          />
        </IndexContainer>
      </DetailContainer>
    </>
  );
}
