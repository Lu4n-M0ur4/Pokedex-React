import axios from "axios";
import  { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/constans";

export default function useRequestPokemons() {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => setPokemonsList(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return { pokemonsList };
}
