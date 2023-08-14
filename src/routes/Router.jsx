import PokemonListPage from "../pages/pokemonListPage/PokemonListPage";
import PokedexStorage from "../pages/pokedexPages/PokedexStorage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useRequestPokemons from "../hooks/useRequestPokemons.js/useRequestPokemons";


export default function Router() {
  
  const {pokemonsList} = useRequestPokemons()


  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage pokemonsList={pokemonsList} />} />
        <Route path="/storage" element={<PokedexStorage />} />
        <Route path="/detail" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
