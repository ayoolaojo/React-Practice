import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import("./rightsidebar.css");
function RightSideBar() {
  return (
    <div className="rightsidebar">
      <div className="right_sidebar_links">
        <Link to="https://web.facebook.com/ayoojo.johnson/">
          <FontAwesomeIcon icon={faFacebook} className="icons" />
        </Link>

        <Link to="https://www.linkedin.com/in/ayoola-ojo-42a160196/">
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
        </Link>

        <Link to="https://github.com/AyoolaOjo">
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </Link>
      </div>
    </div>
  );
}

export default RightSideBar;
