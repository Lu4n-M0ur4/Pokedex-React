/* eslint-disable react/prop-types */
import { useContext } from "react";
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";

import { CardContainer } from "./style";
import GlobalContext from "../../globalContext/GlobalContext";

export const PokedexStorage = () =>{ 

  const context = useContext(GlobalContext)
  const {pokedex,getModalDefault} = context;

  const getPokedex = () =>
    pokedex.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.name}
          pokeStorageDetail={pokemon}
      
        />
      );
    });

  return (
    <>
      <Header />
      <CardContainer>{getPokedex()}</CardContainer>
      {getModalDefault()}
    </>
  );
};

export default PokedexStorage;
