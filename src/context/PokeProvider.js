import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const PokeProvider = ({ children }) => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    const dataConsult = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=2000"
      );
      const dataPoke = await response.json();
      setPoke(dataPoke);
    };

    dataConsult();
  }, []);

  return (
    <MyContext.Provider
      value={{
        poke,
        setPoke,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default PokeProvider;
