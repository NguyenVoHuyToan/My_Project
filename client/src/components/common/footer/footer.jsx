import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.scss";
import Logo from '../../../assets/img/logo.svg';
import Button from '../button/button';

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
              <div className="footer-button">
                <Link to="/" className="nav-link">
                  <Button text="Home" btnStyle="footer-btn"/>
                </Link>
              </div>  
              <div className="footer-button">
                <Link to="/product/products" className="nav-link">
                  <Button text="Product" btnStyle="footer-btn"/>
                </Link>
              </div>
              <div className="footer-button">
                <Link to="/about-us" className="nav-link">
                  <Button text="About us" btnStyle="footer-btn"/>
                </Link>
              </div>
              <div className="footer-button">
                <Link to="/contact" className="nav-link">
                  <Button text="Contact" btnStyle="footer-btn"/>
                </Link>
              </div>
              <div className="footer-button">
                <Link to="/policy" className="nav-link">
                  <Button text="Term & Condition"btnStyle="footer-btn" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-collection flex-col align-left gap-2xs">
            <div className="footer-collection-title h4">
              <p>Collections</p> <hr />
            </div>
            <div className=" footer-collection-content flex-row align-left flex-left-align  ">
              <div className="footer-button-left flex-left-align  flex-col align-left gap-2xs  ">
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Cleanser"btnStyle="footer-btn" />
                </Link>
              </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Sunscreen Cream"btnStyle="footer-btn" />
                  </Link>
              </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Moisturizer" btnStyle="footer-btn" />
                  </Link>
              </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Mask" btnStyle="footer-btn" />
                  </Link>
                </div>
              </div>
              <div className="footer-button-right flex-col align-left gap-2xs">
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Lipstick" btnStyle="footer-btn" />
                  </Link>
                </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Foundation "btnStyle="footer-btn" />
                  </Link>
                </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Face Powder " btnStyle="footer-btn"/>
                  </Link>
                </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Mascara "btnStyle="footer-btn" />
                  </Link>
                </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Eyeshadow "btnStyle="footer-btn" />
                  </Link>
                </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Blush " btnStyle="footer-btn"/>
                  </Link>
                </div>
                <div className="footer-button">
                  <Link to="/product/products" className="nav-link">
                    <Button text="Eyeliner " btnStyle="footer-btn"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        <div className="footer-contact flex-col align-left gap-2xs">
        <div className="footer-contact-title h4">
              <p>Contact Us</p> <hr />
            </div>
            <div className=" flex-col footer-contact-content align-left gap-xs">
            <div className='flex-row gap-xs body-lgt'>
                    <i className="bi bi-envelope"></i>
                    <p>shineaura.cosmetic@gmail.com</p>
                  </div>
                  <div className='flex-row gap-xs body-lgt'>
                    <i className=" bi bi-telephone"></i>
                    <p>+84 123 456 789</p>

                  </div>
                  <div className='flex-row gap-xs body-lgt '>
                    <i className="bi bi-geo-alt"></i>
                    <p>Thu Duc Viet Nam</p>
                  </div>
            </div>
          </div>
        </div>  
        <div className="footer-media">
                                    <div className='body-em'>
                                        <label >Contact our medias:</label>
                                    </div>
                                    <div className="footer-icon-media">
                                        <button> <i className="bi bi-facebook social-icon" ></i></button>
                                        <button><i className="bi bi-twitter-x social-icon"></i></button>
                                        <button><i className="bi bi-instagram social-icon"></i></button>
                                    </div>
                                </div>
      </div>
    </div>
  );
};

export default Footer;
