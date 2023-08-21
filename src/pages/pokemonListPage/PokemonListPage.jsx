/* eslint-disable react/prop-types */
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { CardContainer } from "./Style";
import Header from "../../components/header/Header";


export default function PokemonListPage({
  pokemonsList,
  storagePokedex,
  pokedex,
  removePokedex
}) {

  const getPokemon = () =>
    pokemonsList
      .filter(
        (pokemon) =>
          !pokedex.find(
            (pokemonInPokedex) => pokemon.name === pokemonInPokedex.name 
      ))
      .map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            getDetail={pokemon.url}
            storagePokedex={storagePokedex}
            removePokedex={removePokedex}
            pokedex={pokedex}
          />
        );
      });

  return (
    <>
      <Header />
      <CardContainer>{getPokemon()}</CardContainer>
    </>
  );
}
