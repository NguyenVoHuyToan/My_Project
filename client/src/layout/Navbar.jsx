import React from "react";
import { Link } from "react-router-dom";
import "./navbar.footer.css";
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
let loginAndRegister = [
  {
    title: "Login",
    href: "#",
  },
  {
    title: "Register",
    href: "#",
  },
];

function Navbar() {
  return (
    <>
      <div className="navbar">
        {menu.map((item, index) => {
          return (
            <div key={index}>
              <Link to={item.href}>{item.name}</Link>
            </div>
          );
        })}
        <div className="navbar-login-register">
          {loginAndRegister.map((item, index) => {
            return (
              <div key={index}>
                <Link to={item.href}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
