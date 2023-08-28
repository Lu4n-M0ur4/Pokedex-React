import PokemonListPage from "../pages/pokemonListPage/PokemonListPage";
import PokedexStorage from "../pages/pokedexPages/PokedexStorage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/storage" element={<PokedexStorage />} />
        <Route path="/detail/:pokemonName" element={<PokemonDetailPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}
