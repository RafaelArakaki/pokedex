import { useEffect, useState } from "react";
import { getPokemon } from "../../services/Api";
import Thumbnail from "./Thumbnail";

function Pokemom(){
  const [ pokemons, setPokemons ] = useState([]);
  const [ page, setpage ] = useState(0);
  

  useEffect(() => {
    (async () => {
      const data = await getPokemon(page);    
      setPokemons(data.results);
    })();    
  }, [page])

  const onPrev = () => {
    setpage(page - 1)
  }
  const onNext = () => {
    setpage(page + 1)
    console.log(page)
  }

  return(
    <div className="p-5">
      <div className="grid grid-cols-3">
        {pokemons.map((pokemon) => 
          <Thumbnail key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        )}
      </div>
      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white py-2 px-5 rounded"
          onClick={onPrev}
        >
          Anterior
        </button>
        <button
          className="bg-red-500 text-white py-2 px-5 rounded"
          onClick={onNext}
        >
          Próximo
        </button>
      </div>      
    </div>    
  )
}

export default Pokemom;