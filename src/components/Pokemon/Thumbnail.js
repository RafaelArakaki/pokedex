import { useEffect, useState } from "react";
import { getPokemonData } from "../../services/Api";

function Thumbnail({ name, url }){
  const [ image, setImage ] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPokemonData(url);
      setImage(data.sprites);
    })();    
  }, [url])

  return(
    <div
      className="flex justify-center items-center flex-col w-auto border-2 border-solid border-gray-200 rounded m-4 p-4 text-center w-1/5"
    >
      <img src={image.front_default} alt={name} />
      <span
        className="text-lg text-black-300 block capitalize"
      >
        {name}
      </span>
    </div>
  )
}
export default Thumbnail