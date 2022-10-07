import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/PokeProvider";

const SearchPokemon = () => {
  const { poke } = useContext(MyContext);
  const [name, setName] = useState([]);

  const navigate = useNavigate();
  const handle = (event) => {
    const creature = event.target.value;
    if (creature && creature !== "") {
      setName(creature);
    }
  };

  const goPokemon = (name) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div className="container-search">
      <div className="selector">
        <h1>Selecciona un Pokemón</h1>
        <div>
          <img
            className="arrow"
            src="https://img.icons8.com/color/344/fight-pokemon.png"
          />
        </div>
        <select
          className="bar"
          onChange={(event) => goPokemon(event.target.value)}
        >
          <option value="">Elije un Pokemón</option>
          {poke.results.map((animal) => (
            <option key={animal.name} value={animal.name}>
              {animal.name}
            </option>
          ))}
        </select>
      </div>
      <img src="https://c.tenor.com/L5Iw_E4JLd0AAAAC/pokemon-funny.gif" />
    </div>
  );
};

export default SearchPokemon;
