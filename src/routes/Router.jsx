import PokemonListPage from "../pages/pokemonListPage/PokemonListPage";
import PokedexStorage from "../pages/pokedexPages/PokedexStorage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useRequestPokemons from "../hooks/useRequestPokemons.js/useRequestPokemons";
import { useState } from "react";
import { Modal, Typography } from "@mui/material";
import { ModalStyle } from "../components/pokemonCard/style";

export default function Router() {
  const [pokedex, setPokedex] = useState([]);
  const [open, setOpen] = useState(false);
  const { pokemonsList } = useRequestPokemons();

  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);

  const removePokedex = (pokemon) => {
    const newPokedex = pokedex.filter(
      (pokemonRemove) => pokemonRemove.name !== pokemon.name
    );
    setPokedex(newPokedex);
  };

  const storagePokedex = (pokemon) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemon];
      setPokedex(newPokedex);
      handleOpenModal();
    }
  };

  const getModalDefault = () => {
    return (
      <Modal
        sx={{ bgcolor: "rgba(0, 0, 0, 0.0)" }}
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalStyle>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Gotcha!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            O Pokémon foi adicionado a sua Pokédex
          </Typography>
        </ModalStyle>
      </Modal>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PokemonListPage
              pokemonsList={pokemonsList}
              pokedex={pokedex}
              storagePokedex={storagePokedex}
              setOpen={setOpen}
              open={open}
              handleOpenModal={handleOpenModal}
              handleCloseModal={handleCloseModal}
            />
          }
        />
        <Route
          path="/storage"
          element={
            <PokedexStorage pokedex={pokedex} removePokedex={removePokedex} />
          }
        />
        <Route path="/detail/:pokemonName" element={<PokemonDetailPage />} />
      </Routes>
        {getModalDefault()}
    </BrowserRouter>
  );
}
