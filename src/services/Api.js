import axios from "axios";

export const getPokemon = async (page) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=21`);
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export const getPokemonData = async (URL) => { 
  try {
    const response = await axios.get(URL);
    return response.data
  } catch (error) {
    console.error(error);
  }
}