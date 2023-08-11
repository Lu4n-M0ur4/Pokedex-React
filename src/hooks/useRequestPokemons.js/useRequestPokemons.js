import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/constans";

export default function useRequestPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return {pokemons}
}
