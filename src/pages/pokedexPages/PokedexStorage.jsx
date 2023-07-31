
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { CardContainer } from "./style";


export const PokedexStorage = () => {

  
  return (
    <>
  
      <Header />
      <CardContainer>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </CardContainer>
    </>
  );
};

export default PokedexStorage;
