/* eslint-disable react/prop-types */
import {
  ButtonDeleteStyleHeader,
  ButtonPokedexStyleHeader,
  ButtonStyleHeaderBackList,
  StyledHeader,
} from "./style";

import Logo from "../../assets/Logo.png";
import Button from "@mui/material/Button";
import { goToPokedexStorage, goToHome } from "../../routes/Cordinator";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import GlobalContext from "../../globalContext/GlobalContext";
import { ChevronLeft } from "lucide-react";

export const Header = ({ pokeDetail }) => {
  const context = useContext(GlobalContext);
  const { pokedex, removePokedex, storagePokedex } = context;

  const navigate = useNavigate();

  useEffect(() => {
    getButtonCondition();
  }, [pokedex]);

  const allReadyInPokedex = pokedex?.find(
    (pokemonInPokedex) => pokemonInPokedex.name === pokeDetail?.name
  );

  const getButtonCondition = () => {
    if (allReadyInPokedex) {
      return (
        <>
          <ButtonStyleHeaderBackList onClick={() => goToHome(navigate)}>
          <ChevronLeft/>
            Todos Pokémons
          </ButtonStyleHeaderBackList>
          <img src={Logo} />
          <ButtonDeleteStyleHeader
            onClick={() => removePokedex(pokeDetail)}
            variant="contained"
            color="error"
          >
            Excluir da Pokedex
          </ButtonDeleteStyleHeader>
        </>
      );
    } else {
      return (
        <>
          <ButtonStyleHeaderBackList onClick={() => goToHome(navigate)}>
          <ChevronLeft/>
            Todos Pokémons
          </ButtonStyleHeaderBackList>
          <img src={Logo} />
          <Button
            onClick={() => storagePokedex(pokeDetail)}
            variant="contained"
            sx={{ width: 226, height: 57 }}
          >
            Capturar
          </Button>
        </>
      );
    }
  };

  const getButtonForPokemons = () => {
    if (window.location.href.includes("/storage")) {
      return (
        <>
          
          <ButtonStyleHeaderBackList onClick={() => goToHome(navigate)}>
          <ChevronLeft/>
            Todos Pokémons
          </ButtonStyleHeaderBackList>
          <img src={Logo} />
          <Box></Box>
        </>
      );
    }
    if (window.location.href.includes("/detail")) {
      return <>{getButtonCondition()}</>;
    } else {
      return (
        <>
          <Box></Box>
          <img src={Logo} />
          <ButtonPokedexStyleHeader
            onClick={() => goToPokedexStorage(navigate)}
            variant="contained"
            sx={{
              fontSize: 24,
              fontFamily: "Poppins",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "",
            }}
          >
            Pokédex
          </ButtonPokedexStyleHeader>
        </>
      );
    }
  };

  return <StyledHeader>{getButtonForPokemons()}</StyledHeader>;
};
export default Header;
