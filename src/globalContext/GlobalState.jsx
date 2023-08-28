/* eslint-disable react/prop-types */
import { useState } from "react";
import GlobalContext from "./GlobalContext.jsx";
import useRequestPokemons from "../hooks/useRequestPokemons.js/useRequestPokemons";
import { Modal, Typography } from "@mui/material";
import { ModalStyle } from "../components/pokemonCard/style";

export default function GlobalState({ children }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [pokedex, setPokedex] = useState([]);

  const { pokemonsList } = useRequestPokemons();

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const removePokedex = (pokemon) => {
    const newPokedex = pokedex.filter(
      (pokemonRemove) => pokemonRemove.name !== pokemon.name
    );
    setPokedex(newPokedex);
    handleOpenDeleteModal();
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
    if (open === true) {
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
    } else if (openDeleteModal === true) {
      return (
        <Modal
          sx={{ bgcolor: "rgba(0, 0, 0, 0.0)" }}
          open={openDeleteModal}
          onClose={handleCloseDeleteModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalStyle>
            <Typography id="modal-modal-title" variant="h2" component="h2">
              Oh,no!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              O Pokémon foi removido da sua Pokedéx
            </Typography>
          </ModalStyle>
        </Modal>
      );
    }
  };

  


  const data = {
    pokedex,
    pokemonsList,
    setPokedex,
    removePokedex,
    storagePokedex,
    openDeleteModal,
    setOpenDeleteModal,
    open,
    setOpen,
    getModalDefault,
    handleOpenDeleteModal,
    handleOpenModal,
    handleCloseModal,
    handleCloseDeleteModal,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
