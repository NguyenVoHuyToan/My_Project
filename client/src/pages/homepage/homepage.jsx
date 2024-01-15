import "./homepage.scss";
import { Link } from "react-router-dom";
import {
  Pic1,
  Pic2,
  Pic3,
  About1,
  About2,
  About3,
  About4,
  Contact,
} from "./imports.js";
import Collection from "../../components/homepage/collection/collection.jsx";
import Button from "../../components/common/button/button.jsx";
import Productcard from "../../components/common/product-card/product-card.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

import Image from "./Image.jsx";
import TitleHomePage from "./TitleHomePage.jsx";
import TextProduct from "./TextProduct.jsx";
import Text from "./Text.Jsx";
import ContactUs from "./ContactUs.jsx";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 390 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 390, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="homepage flex-col ">
      <div className="homepage-shine-container site-mx-wdth flex-col">
        <div className="homepage-first">
          <div>
            <Image iamge1={Pic1} image2={Pic2} image3={Pic3} />
          </div>
          <div className="hero-text flex-col gap-sm">
            <TitleHomePage
              content="SHINEAURA"
              title="CONNECT WITH RADIANT BEAUTY"
              text="In a world where beauty never stops evolving, ShineAura is your destination to transform beauty into an art form. We bring diversity, quality, and style from renowned cosmetics brands worldwide. Join us
              in experiencing and expressing your unique beauty through the
              limitless choices at ShineAura."
            />
          </div>
        </div>
      </div>
      <div className="home-product flex-row">
        <div className="home-product-container flex-col gap-md">
          <TextProduct
            content="PRODUCTS"
            title="At ShineAura, we take pride in offering a diverse collection of beauty
                products from world-renowned brands. Embrace and express your individual
                beauty with limitless choices from ShineAura."
          />
          <div className="product-parent-detail flex-row gap-md">
            <div className="home-list-product flex-row">
              <Carousel
                responsive={responsive}
                containerClass="carousel-container"
                itemClass="width-reset flex-col"
                slidesToSlide={1}
                keyBoardControl={true}
                swipeable={true}
                draggable={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {products.slice(0, 8).map((product) => (
                  <Productcard
                    product={product}
                    key={product.product_id}
                  ></Productcard>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="home-btn-see">
            <Link to="/product/products">
              <Button
                text="See more"
                btnStyle="underline-btn"
                disabled={false}
                iconR="bi bi-arrow-right"
                iconSide="right"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="section-container flex-col bg-desert">
        <div className="home-about-us flex-row flex-center-align">
          <div className="content-holder">
            <div className="about-us-content flex-col gap-md align-left">
              <p className="h1">ABOUT US</p>

              <Text
                text1="Discover the pinnacle of beauty at ShineAura, where we redefine the
                    cosmetic experience beyond ordinary standards. As your discerning
                    companion on the journey to magnify and honor your innatespirational force, urging you to explore
                    and indulge in the captivating world of beauty."
                text2="ShineAura not only delivers convenience but also presents a
                    meticulously chosen array of products, ensuring your diverse beauty
                    needs are met with unparalleled excellence. Beyond cosmetics, we
                    prioritize your satisfaction with the highest standards of privacy
                    and security, guaranteeing a seamless and secure online shopping
                    experience."
              />
            </div>
            <div className="about-us-see-more">
              <Link to="/about-us">
                <Button
                  text="See more"
                  btnStyle="underline-btn"
                  disabled={false}
                  iconR="bi bi-arrow-right"
                  iconSide="right"
                />
              </Link>
            </div>
          </div>
          <div className="img-container">
            <div className="image-box">
              <img className="img1" src={About1} />
              <img className="img2" src={About2} />
              <img className="img3" src={About3} />
              <img className="img4" src={About4} />
            </div>
          </div>
        </div>
        <div className="section-container ">
          <div className="text-coll h1"> COLLECTIONS</div>
          <div className="collection-container">
            <Collection />
          </div>
        </div>

        <div className="wireframe-6 flex-col">
          <div className="flex-row contact-container gap-2xl">
            <div className="image-contact">
              <img src={Contact} alt="" />
            </div>
            <div className="contact-content flex-col align-left">
              <div className="text-contact flex-col align-left gap-sm">
                <TextProduct
                  content="CONTACT US"
                  title=" Need assistance or have questions? Don&#39;t hesitate to get
                  in touch with us. ShineAura&#39;s customer care team is
                  available 24/7 to assist you. Let us know how we can help.
                  We&#39;re here to listen and ensure you have the best shopping
                  experience on ShineAura."
                />
                <div className="flex-col text-contact-icon  align-left gap-xs body-bld">
                  <ContactUs
                    add1="shineaura.cosmetic@gmail.com"
                    add2="+84 123 456 789"
                    add3="Thu Duc Viet Nam"
                  />
                </div>
              </div>
              <div className="contact-our-media flex-col gap-sm align-left">
                <div className="body">Contact our medias:</div>
                <div className="flex-row gap-sm align-left">
                  <i className="bi bi-facebook media-icon"></i>
                  <i className="bi bi-messenger media-icon"></i>
                  <i className="bi bi-instagram media-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
