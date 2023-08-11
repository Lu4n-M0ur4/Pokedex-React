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
import { useCallback } from "react";
import { yellow } from "@mui/material/colors";

export default function PokemonCard() {
  const navigate = useNavigate();
  const type = "eletric";

  const getType = useCallback(() => {
    switch (type) {
      case "flame":
        return "green";
      case "eletric":
        return "yellow";
    }
  }, []);

  return (
    <CardGlobal>
      <CardContainer sx={{ backgroundColor: getType() }}>
        <InfosContainer>
          <Typography variant="body2" gutterBottom>
            id#03
          </Typography>
          <Typography variant="h4">Bulbasaur</Typography>
          <AtributesCard>
            <PowerInfo>
              <img src={Attributes} alt="Atributos" />
              {type}
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
