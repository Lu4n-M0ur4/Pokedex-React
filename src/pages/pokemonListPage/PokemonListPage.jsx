/* eslint-disable react/prop-types */
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { BoxSection, CardContainer, TitleSection } from "./Style";
import Header from "../../components/header/Header";
import GlobalContext from "../../globalContext/GlobalContext";
import { useContext } from "react";


export default function PokemonListPage() {
  const context = useContext(GlobalContext);
  const { pokedex, pokemonsList,getModalDefault } = context;

  const getPokemon = () =>
    pokemonsList
      .filter(
        (pokemon) =>
          !pokedex.find(
            (pokemonInPokedex) => pokemon.name === pokemonInPokedex.name
          )
      )
      .map((pokemon) => {
        return <PokemonCard key={pokemon.name} getDetail={pokemon.url} />;
      });

  return (
    <>
      <Header />
      <BoxSection>
      <TitleSection>Todos Pokemons </TitleSection>
      </BoxSection>
      <CardContainer>{getPokemon()}</CardContainer>
      {getModalDefault()}
    </>
  );
}
