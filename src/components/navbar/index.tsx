import { NavLink } from "react-router-dom";
import "./navbar.css";
// import("../../assets/Ayodev.jpg");
function NavBar() {
  return (
    <nav className="navbar">
      <img src="../../../public/Ayodev.jpg" alt="Ayoola" />

      <ul>
        <li>
          <NavLink
            to="/home"
            style={{ color: "white", textDecoration: "none" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/about"
            style={{ color: "white", textDecoration: "none" }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            style={{ color: "white", textDecoration: "none" }}
          >
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
