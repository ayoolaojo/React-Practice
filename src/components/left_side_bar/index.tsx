import { NavLink, Link } from "react-router-dom";

import("../../index.css");
import("./leftsidebar.css");
function LeftSideBar() {
  return (
    <div className="leftsidebar">
      <div>
        <img src="../../../public/Ayodev.jpg" alt="Ayoola" />
        <h2>Ayoola Ojo</h2>
        <p>frontend developer</p>
      </div>

      <ul>
        <li>
          <NavLink
            to="/home"
            style={{ color: "#161CAA", textDecoration: "none" }}
          >
            HOME
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/about"
            style={{ color: "#161CAA", textDecoration: "none" }}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            style={{ color: "#161CAA", textDecoration: "none" }}
          >
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            style={{ color: "#161CAA", textDecoration: "none" }}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tools"
            style={{ color: "#161CAA", textDecoration: "none" }}
          >
            TOOLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={{ color: "#161CAA", textDecoration: "none" }}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            style={{ color: "#161CAA", textDecoration: "none" }}
          >
            CONTACTS
          </NavLink>
        </li>
      </ul>

      <div className="social_media">
        <Link to="https://web.facebook.com/ayoojo.johnson/">
          <img src="../../../facebook-brands.svg" alt="facebook" />
        </Link>

        <Link to="https://www.linkedin.com/in/ayoola-ojo-42a160196/">
          {" "}
          <img src="../../../linkedin-in-brands.svg" alt="linkedin" />{" "}
        </Link>

        <Link to="https://github.com/AyoolaOjo">
          <img src="../../../github-brands.svg" alt="github" />
        </Link>
      </div>
    </div>
  );
}

export default LeftSideBar;
