import React from "react";
import { Outlet } from "react-router-dom";
import "../Styles/Components/layout.css";
import { useLocation, Link } from "react-router-dom";
import { FaBicycle, FaShoppingCart } from "react-icons/fa";

function Layout() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <header className={`header ${location.pathname !== "/" && "active"}`}>
        <div className="container">
          <div className="header-inner">
            <div className="header-inner__logo">
              <FaBicycle />
            </div>
            <div className="header-inner__navigation">
              <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/bicycles  "}>Bicycles</Link>
                <Link>Accessories</Link>
                <Link to={"about"}>About</Link>
                <Link>Contact</Link>
              </ul>
            </div>
            <div className="header-inner__cart">
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}

export default Layout;
