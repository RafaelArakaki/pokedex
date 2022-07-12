import { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "../Api/Api";

function Pokemom(){
  const [ pokemons, setPokemons ] = useState([]);
  const [ pokemonData, setPokemoData ] = useState([])
  useEffect(() => {
    (async () => {
      const pokemons = await getPokemon();
      
      setPokemons(pokemons.results);
    })();    
  }, [])

  return(
    <div>
      {pokemons.map((pokemon) => 
        <div
          key={pokemon.name}
          className="border-2 border-solid border-gray-200 rounded m-4 p-4 text-center w-1/5"
        >
          <img src={getPokemonData(pokemon.url)} alt={pokemon.name} />
          <span
            className="text-lg text-black-300 block"
          >
            {pokemon.name}
          </span>
        </div>
      )}
    </div>     
  )
}

export default Pokemom;