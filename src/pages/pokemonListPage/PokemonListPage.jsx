import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { CardContainer } from "./Style";
import Header from "../../components/header/Header";
import { BASE_URL } from "../../constants/constans";

export default function PokemonListPage({pokemonsList}) {
  
  const getPokemon = () =>
    pokemonsList.map((pokemon) => { 
      return (
        <>
          <PokemonCard key={Date.now()} getDetail={pokemon.url}/>
        </>
      );
    });

  return (
    <>
      <Header />
      <CardContainer>
        {getPokemon()}
      </CardContainer>
    </>
  );
}