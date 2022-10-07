import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeProvider from "./context/PokeProvider";
import Navbar from "./components/Navbar";
import SearchPokemon from "./views/SearchPokemon";
import DetailsPokemon from "./components/DetailsPokemon";
import Home from "./views/Home";

function App() {
  return (
    <PokeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<SearchPokemon />} />
          <Route path="/pokemon/:name" element={<DetailsPokemon />} />
        </Routes>
      </BrowserRouter>
    </PokeProvider>
  );
}

export default App;
