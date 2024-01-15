import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import ContentFooter from "./ContentFooter";
import "./footer.scss";

const siteMap = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/product/products",
    title: "Product",
  },
  {
    href: "/about-us",
    title: "About us",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/policy",
    title: "Term & Condition",
  },
];

const collectionLeft = [
  {
    href: "/product/products",
    title: "Cleanser",
  },
  {
    href: "/product/products",
    title: "Sunscreen Cream",
  },
  {
    href: "/product/products",
    title: "Moisturizer",
  },
  {
    href: "/product/products",
    title: "Mask",
  },
];

const collectionRight = [
  {
    href: "/product/products",
    title: "Lipstick",
  },
  {
    href: "/product/products",
    title: "Foundation",
  },
  {
    href: "/product/products",
    title: "Face Powder ",
  },
  {
    href: "/product/products",
    title: "Mascara",
  },
  {
    href: "/product/products",
    title: "Eyeshadow",
  },
  {
    href: "/product/products",
    title: "Blush ",
  },
  {
    href: "/product/products",
    title: "Eyeliner",
  },
];
const Footer = () => {
  return (
    <div className="footer flex-row">
      <div className="footer-holder align-left gap-xl flex-row flex-wrap">
        <div className="footer-logo flex-col">
          <img className="footer-vector-icon" alt="" src={Logo} />
        </div>
        <div className="footer-nav flex-row gap-xl align-left">
          <div className="footer-sitemap flex-col align-left gap-2xs">
            <div className="footer-sitemap-title h4">
              <p>Sitemap</p> <hr />
            </div>
            <div className=" flex-col footer-sitemap-content align-left ">
              {siteMap.map((item, index) => {
                return (
                  <div className="footer-button" key={index}>
                    <Link to={item.href} className="nav-link">
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer-collection flex-col align-left gap-2xs">
            <div className="footer-collection-title h4">
              <p>Collections</p> <hr />
            </div>
            <div className=" footer-collection-content flex-row align-left flex-left-align  ">
              <div className="footer-button-left flex-left-align  flex-col align-left gap-2xs  ">
                {collectionLeft.map((item, index) => {
                  return (
                    <div className="footer-button" key={index}>
                      <Link to={item.href} className="nav-link">
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="footer-button-right flex-col align-left gap-2xs">
                {collectionRight.map((item, index) => {
                  return (
                    <div className="footer-button" key={index}>
                      <Link to={item.href} className="nav-link">
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footer-contact flex-col align-left gap-2xs">
            <ContentFooter
              text="Contact us"
              title1="shineaura.cosmetic@gmail.com"
              title2="+84 123 456 789"
              title3="Thu Duc Viet Nam"
            />
          </div>
        </div>
        <div className="footer-media">
          <div className="body-em">
            <p> Copyright@Nhom_1_WEB74 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
