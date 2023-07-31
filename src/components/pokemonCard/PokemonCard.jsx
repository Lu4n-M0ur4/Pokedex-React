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

export default function PokemonCard() {
  const navigate = useNavigate();

  return (
    <CardGlobal>
      <CardContainer>
        <InfosContainer>
          <Typography variant="body2" gutterBottom>
            id#03
          </Typography>
          <Typography variant="h4">Bulbasaur</Typography>
          <AtributesCard>
            <PowerInfo>
              <img src={Attributes} alt="Atributos" />
              poison
            </PowerInfo>
            <PowerInfo>
              <img src={Attributes} alt="Atributos" />
              water
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
            src={Bulba}
            title="Pokemon"
          />
          <Button size="small">Excluir</Button>
        </CardActions>
      </CardContainer>
    </CardGlobal>
  );
}
