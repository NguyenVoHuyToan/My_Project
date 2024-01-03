import React, {useState, useEffect} from 'react';
import './homepage.scss'
import { Link } from 'react-router-dom';
import Pic1 from '../../assets/img/homepage/hero-1.png';
import Pic2 from '../../assets/img/homepage/hero-2.png';
import Pic3 from '../../assets/img/homepage/hero-3.png';
import About1 from '../../assets/img/homepage/about-1.png';
import About2 from '../../assets/img/homepage/about-2.png';
import About3 from '../../assets/img/homepage/about-3.png';
import About4 from '../../assets/img/homepage/about-4.png';
import Contact from '../../assets/img/homepage/contact-us.png';
import Collection from '../../components/homepage/collection/collection.jsx';
import Button from '../../components/common/button/button.jsx';
import Productcard from '../../components/common/product-card/product-card.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
          setProducts(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 390 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 390, min: 0 },
      items: 1
    }
  };

  return (
    <div className='homepage flex-col '>
      <div className='homepage-shine-container site-mx-wdth flex-col'>
        <div className="homepage-first">
          <div className="pic-parent">
            <img className="pic-1" alt="" src={Pic1} />
            <img className="pic-2" alt="" src={Pic2} />
            <img className="pic-3" alt="" src={Pic3} />
          </div>
          <div className="hero-text flex-col gap-sm">
            <div className='title flex-col gap-sm'>
              <div className="shineaura h1">SHINEAURA</div>
              <div className="connect-with-radiant subtitle ">CONNECT WITH RADIANT BEAUTY</div>
            </div>
            <div className="content body">
              In a world where beauty never stops evolving, ShineAura is your destination to transform beauty into an art form. We bring diversity, quality, and style from renowned cosmetics brands worldwide. Join us
              in experiencing and expressing your unique beauty through the
              limitless choices at ShineAura.
            </div>
          </div>
        </div>
        <div className="home-product flex-row">
          <div className="home-product-container flex-col gap-md">
            <div className="text-product">
              <div className="products h1">PRODUCTS</div>
              <div className="at-shineaura-we body">
                At ShineAura, we take pride in offering a diverse collection of beauty
                products from world-renowned brands. Embrace and express your individual
                beauty with limitless choices from ShineAura.
              </div>
            </div>
            <div className="product-parent-detail flex-row gap-md">
              <div className="home-list-product flex-row">
                <Carousel responsive={responsive} containerClass="carousel-container" itemClass="width-reset flex-col" slidesToSlide={1} keyBoardControl={true} swipeable={true} draggable={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                  {products.slice(0, 8).map((product) => (
                    <Productcard product={product} key={product.product_id}></Productcard>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className='home-btn-see'>
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
            <div className="content-holder flex-col">
              <div className="about-us-content flex-col gap-md align-left">
                <p className="h1">ABOUT US</p>
                <div className="text-content body flex-col gap-sm">
                  <p>
                    Discover the pinnacle of beauty at ShineAura, where we redefine the
                    cosmetic experience beyond ordinary standards. As your discerning
                    companion on the journey to magnify and honor your innatespirational force, urging you to explore
                    and indulge in the captivating world of beauty.
                  </p>
                  <p>
                    ShineAura not only delivers convenience but also presents a
                    meticulously chosen array of products, ensuring your diverse beauty
                    needs are met with unparalleled excellence. Beyond cosmetics, we
                    prioritize your satisfaction with the highest standards of privacy
                    and security, guaranteeing a seamless and secure online shopping
                    experience.
                  </p>
                </div>
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
            <div className='about-us-see-more'>
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
        </div>
        <div className="section-container flex-col gap-3xl">
          <div className="collection-container flex-col align-left gap-md">
            <div className="text-coll h1"> COLLECTIONS</div>
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
                <p className="Contact-us h1"> CONTACT US</p>
                <p className="text-contact2 body">Need assistance or have questions? Don't hesitate to get in touch with us. ShineAura's customer care team is available 24/7 to assist you. Let us know how we can help. We're here to listen and ensure you have the best shopping experience on ShineAura.</p>
                <div className="flex-col text-contact-icon  align-left gap-xs body-bld">
                  <div className='flex-row gap-xs'>
                    <i className="bi bi-envelope-fill"></i>
                    <p>shineaura.cosmetic@gmail.com</p>
                  </div>
                  <div className='flex-row gap-xs'>
                    <i className=" bi bi-telephone-fill"></i>
                    <p>+84 123 456 789</p>

                  </div>
                  <div className='flex-row gap-xs'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>Thu Duc Viet Nam</p>
                  </div>
                </div>

              </div>
              <div className="contact-our-media flex-col gap-sm align-left">
                <div className='body'>Contact our medias:</div>
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
}

export default Homepage;