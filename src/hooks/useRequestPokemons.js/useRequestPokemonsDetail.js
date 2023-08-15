import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useRequestPokemonsDetail(initialState) {
 
  const [pokeDetail, setPokeDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`${initialState}`)
      .then((res) => setPokeDetail(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return {pokeDetail}
}
