import { Outlet } from "react-router-dom";
import NavBar from "../navbar";
import LeftSideBar from "../left_side_bar";
import RightSideBar from "../right_side_bar";
import Footer from "../footer";
import "./layout.css";

function Layout() {
  return (
    <div className="over_all_container">
      <div className="container">
        <div className="navbar">
          <NavBar />
        </div>

        <div className="container_item">
          <div className="leftsidebar">
            <LeftSideBar />
          </div>
          <div className="container_item_item">
            <main className="main">
              <Outlet />
            </main>
            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </div>
      </div>

      <div className="rightbar">
        {" "}
        <RightSideBar />{" "}
      </div>
    </div>
  );
}

export default Layout;
