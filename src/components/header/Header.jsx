/* eslint-disable react/prop-types */
import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.png";
import Button from "@mui/material/Button";
import { goToPokedexStorage, goToHome } from "../../routes/Cordinator";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";

export const Header = ({pokedex, pokeDetail, storagePokedex, removePokedex}) => {
const navigate = useNavigate();

useEffect(() => {
  getButtonCondition()
}, [pokedex]);

const allReadyInPokedex = pokedex?.find(
 (pokemonInPokedex) => pokemonInPokedex.name === pokeDetail.name)



 const getButtonCondition = () => {

  if(allReadyInPokedex){
    return (
      <>
        <Button onClick={() => goToHome(navigate)}>Todos Pokémons</Button>
        <img src={Logo} />
        <Button
          onClick={() => removePokedex(pokeDetail)}
          variant="contained"
        >
          Excluir da Pokedex
        </Button>
      </>
    );
  } else {
    return (
      <>
      <Button onClick={() => goToHome(navigate)}>Todos Pokémons</Button>
        <img src={Logo} />
        <Button
          onClick={() => storagePokedex(pokeDetail)}
          variant="contained"
        >
          Capturar
        </Button>
      </>
    );
  }

 }

  const getButtonForPokemons = () => {
    if (window.location.href.includes("/storage")) {
      return (
        <>
          <Button onClick={() => goToHome(navigate)}>Todos Pokémons</Button>
          <img src={Logo} />
          <Box></Box>
        </>
      );
    }
    if (window.location.href.includes("/detail")) {
      return (
        <>
         {getButtonCondition()}
        </>
      );
    } else {
      return (
        <>
        <Box></Box>
          <img src={Logo} />
          <Button
            onClick={() => goToPokedexStorage(navigate)}
            variant="contained"
          >
            Pokédex
          </Button>
        </>
      );
    }
  };

  return <StyledHeader>{getButtonForPokemons()}</StyledHeader>;
};
export default Header;
