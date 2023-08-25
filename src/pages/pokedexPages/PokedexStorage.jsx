/* eslint-disable react/prop-types */
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";

import { CardContainer } from "./style";

export const PokedexStorage = ({
  pokedex,
  removePokedex,
  handleOpenDeleteModal,
  handleCloseDeleteModal,
}) => {
  const getPokedex = () =>
    pokedex.map((pokemon) => {
      return (
        <PokemonCard
          key={pokemon.name}
          pokeStorageDetail={pokemon}
          removePokedex={removePokedex}
          handleCloseDeleteModal={handleCloseDeleteModal}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
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
