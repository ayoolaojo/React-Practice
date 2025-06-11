import { Link } from "react-router-dom";

import("./rightsidebar.css");
function RightSideBar() {
  return (
    <div className="rightsidebar">
      <div className="right_sidebar_links">
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

export default RightSideBar;
