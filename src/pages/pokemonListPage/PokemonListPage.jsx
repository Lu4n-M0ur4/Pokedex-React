/* eslint-disable react/prop-types */
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { CardContainer } from "./Style";
import Header from "../../components/header/Header";



export default function PokemonListPage({pokemonsList, storagePokedex}) {
  
  const getPokemon = () =>

    pokemonsList.map((pokemon) => { 
      return (
       
          <PokemonCard key={pokemon.name} getDetail={pokemon.url} storagePokedex={storagePokedex}/>
      
      );
    });

  return (
    <>
      <Header />
      <CardContainer >
        
        {getPokemon() }
        
      </CardContainer>
    </>
  );
}
