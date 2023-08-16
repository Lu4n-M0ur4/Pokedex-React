import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";

import { CardContainer } from "./style";

export const PokedexStorage = ({ pokedex }) => {

  const getPokedex = () =>
    pokedex.map((pokemon) => {console.log(pokemon)
      return ( 
        
          <PokemonCard key={pokemon.name} pokeStorageDetail={pokemon}  />
       
      );
    });

  return (
    <>
      <Header />
      <CardContainer>{getPokedex()}</CardContainer>
    </>
  );
};

export default PokedexStorage;
