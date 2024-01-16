// Navbar.jsx
import React, { useState, useEffect } from "react";
import "./nav-bar.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import Button from "../button/button";
import DropdownButton from "../button/dropdown-button";
import { useAuth } from "../../../hooks/authProvider";


function Navbar({ onAddToCart }) {
  const [navColour, updateNavbar] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [signin, setSignin] = useState(false);
  const { signedInEmail } = useAuth();
 const [signout,setSignout]=useState(false)
  function scrollHandler() {
    updateNavbar(window.scrollY >= 20);
  }

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
    setSearchOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
   useEffect(() => {
    if (signedInEmail) {
      setTotalQuantity((prevQuantity) => prevQuantity + 1);
    }
  }, [onAddToCart, signedInEmail]);
  setInterval(()=>{
    const token = localStorage.getItem("token");
    if (token == "undefined" || token == "null"||!token) {
      setSignin(false);
    }
    else{
      setSignin(true);
    }
  },1000)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == "undefined" || token == "null"||!token) {
      setSignin(false);
    }
    else{
      setSignin(true);
    }
  },[signout]);
 
  return (
    <div
      className={`navigation flex-row flex-center-align ${
        navColour ? "nav-scroll" : ""
      }`}
    >
      <div className="nav-logo flex-col">
        <i className="navOpenBtn bi bi-list" onClick={toggleNav}></i>
        <Link to="/" className="nav-link logo-img">
          <img className="nav-logo-icon" src={Logo} alt="logo" />
        </Link>
      </div>
      <div
        className={`nav-parent flex-row gap-2xs ${isNavOpen ? "openNav" : ""}`}
      >
        <i className="navCloseBtn bi bi-x-lg" onClick={toggleNav}></i>
        {isSearchOpen ? null : (
          <div className="nav-btn-collections">
            <div className="nav-list">
              <Link to="/" className="nav-link">
                <Button btnStyle="nav-btn" text="HOME" />
              </Link>
            </div>
            <div className="nav-list">
              <Link to="/product/products" className="nav-link">
                <DropdownButton
                  btnStyle="nav-btn"
                  text="COLLECTION"
                  iconL="bi bi-list icon-size-20 square-icon"
                  dropdownStyle="collection-dropdown"
                />
              </Link>
            </div>
            <div className="nav-list">
              <Link to="/contact" className="nav-link">
                <Button text="CONTACT" btnStyle="nav-btn" />
              </Link>
            </div>
            <div className="">
              <Link to="/about-us" className="nav-link">
                <Button text="ABOUT US" btnStyle="nav-btn" />
              </Link>
            </div>
            <div className="">
              <Link to="/policy" className="nav-link">
                <Button text="POLICY" btnStyle="nav-btn" />
              </Link>
            </div>
            <div className="">
              <Link to="/admin" className="nav-link">
                <Button text="ADMIN" btnStyle="nav-btn" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="nav-icon flex-row gap-xs">
        <div className="icon-button">
          <Button
            btnStyle="icon-nav-btn"
            iconL="bi bi-search"
            onClick={() => setSearchOpen(!isSearchOpen)}
          />
          {isSearchOpen && (
            <div className="search-box">
              <input type="text" placeholder="Search here..." />
            </div>
          )}
        </div>
        <div className="icon-button">
          <Link to="/cart" className="nav-link">
            <Button btnStyle="icon-nav-btn" iconL="bi bi-cart" />
            {signedInEmail && totalQuantity > 0 && (
              <span className="cart-item-count">{totalQuantity}</span>
            )}
          </Link>
        </div>
        <div>
          {signin ? (
            <div className="icon-button">
              <DropdownButton
                btnStyle="icon-nav-btn"
                iconL="bi bi-person"
                dropdownStyle="user-setting-dropdown"
                method={setSignout}
                value={signout}
              />
            </div>
          ) : (
            <Link to="/signin" className="nav-link">
              <Button text="Sign-in" btnStyle="nav-btn" />
            </Link>
          )}
          {/* <Link to="/signin" className="nav-link">
            <Button text="Sign-in" btnStyle="nav-btn" />
          </Link> */}
        </div>
        {/* <div className="icon-button">
          <DropdownButton
            btnStyle="icon-nav-btn"
            iconL="bi bi-person"
            dropdownStyle="user-setting-dropdown"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
