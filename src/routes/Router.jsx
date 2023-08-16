import PokemonListPage from "../pages/pokemonListPage/PokemonListPage";
import PokedexStorage from "../pages/pokedexPages/PokedexStorage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useRequestPokemons from "../hooks/useRequestPokemons.js/useRequestPokemons";
import { useState } from "react";

export default function Router() {
  const [pokedex, setPokedex] = useState([]);
  const { pokemonsList } = useRequestPokemons();


  const storagePokedex = (pokemon) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemon];
      setPokedex(newPokedex);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PokemonListPage pokemonsList={pokemonsList} storagePokedex={storagePokedex}/>}
        />
        <Route path="/storage" element={<PokedexStorage pokedex={pokedex} />} />
        <Route path="/detail" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
