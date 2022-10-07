import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "undefined");

  return (
    <div className="nav">
      <div>
        <img
          className="icon"
          src="https://img.icons8.com/color/344/pokeball-2.png"
        />
      </div>
      <NavLink className={setActiveClass} end to="/">
        Home
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to="/pokemon">
        Pokemones
      </NavLink>
    </div>
  );
}
