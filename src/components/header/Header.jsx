import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.png";
import Button from "@mui/material/Button";
import { goToPokedexStorage, goToHome } from "../../routes/Cordinator";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export const Header = () => {
  const navigate = useNavigate();

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
         
          <Button onClick={() => goToHome(navigate)}>Todos Pokémons</Button>
          <img src={Logo} />
          <Button
            onClick={() => goToPokedexStorage(navigate)}
            variant="contained"
          >
            Pokédex
          </Button>
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
