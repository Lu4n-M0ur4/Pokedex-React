/* eslint-disable react/prop-types */
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { CardContainer } from "./Style";
import Header from "../../components/header/Header";


export default function PokemonListPage({
  pokemonsList,
  storagePokedex,
  pokedex,
  removePokedex,
  setOpen,
  open,
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
            setOpen={setOpen}
            open={open}
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
