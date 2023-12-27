import React from "react";
import { Link } from "react-router-dom";
import "./navbar.footer.css";
import Login from "./Login";
let menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Profile",
    href: "/profile",
  },
];
function Navbar() {
  return (
    <>
      <div className="navbar">
        {menu.map((item, index) => {
          return (
            <div key={index}>
              <Link className="item-navbar" to={item.href}>{item.name}</Link>
            </div>
          );
        })}
        <div className="navbar-login-register">
            <Login/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
