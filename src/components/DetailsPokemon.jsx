import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPokemon = () => {
  const [animal, setAnimal] = useState();

  const { name } = useParams();

  const getAPI = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const dataPoke = await resp.json();
    setAnimal(dataPoke);
    console.log(dataPoke);
  };

  try {
    useEffect(() => {
      getAPI();
    }, [name]);
  } catch (error) {
    alert("Mensaje del Servidor: No se pudo establecer la conexión");
  }

  return (
    <div className="img-container">
      {animal && (
        <>
          <div className="card">
            <h2>{name}</h2>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${animal.id}.png`}
              alt={animal.name}
            />
            <div className="container-description">
              {animal ? (
                <h4>
                  {" "}
                  <p>Hp {animal.stats[0].base_stat}</p>{" "}
                </h4>
              ) : (
                ""
              )}
              <h4>Ataque: {animal.stats[1].base_stat}</h4>
              <h4>Defensa: {animal.stats[2].base_stat}</h4>
              <h4>Ataque Especial: {animal.stats[3].base_stat}</h4>
              <h4>Defensa Especial: {animal.stats[4].base_stat}</h4>
              <h4>Velocidad: {animal.stats[5].base_stat}</h4>
              {animal ? (
                <h4>
                  {" "}
                  <p>Type {animal.types[0].type.name}</p>{" "}
                </h4>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPokemon;
