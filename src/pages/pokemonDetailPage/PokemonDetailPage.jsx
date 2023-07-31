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
import Bulba from "../../assets/Bulba.png";
import Stats from "../../assets/stats.png";
import Attributes from "../../assets/poison 1.png";

export default function PokemonDetailPage() {
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
              src={Bulba}
              title="Pokemon"
              alt="Pokemon"
            />
          </Box>
          <Box>
            <CardMedia
              sx={{ height: 193, width: 193 }}
              component="img"
              src={Bulba}
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
              id#03
            </Typography>
            <Typography variant="h4">Bulbasaur</Typography>
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
            src={Bulba}
            title="Pokemon"
            alt="Pokemon"
          />
        </IndexContainer>
      </DetailContainer>
    </>
  );
}
