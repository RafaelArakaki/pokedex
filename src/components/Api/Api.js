import axios from "axios";

export const getPokemon = async () => { 
  try {
    const options = {
      url: 'https://pokeapi.co/api/v2/pokemon',
      method: 'GET',      
    };
    const res = await axios(options);
    const response = await res.data;
    console.log(response)
    return response
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
    }
  }
}

export const getPokemonData = async (URL) => { 
  try {
    const options = {
      url: URL,
      method: 'GET',      
    };
    const res = await axios(options);
    const response = await res.data;
    console.log(response)
    return response
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
    }
  }
}