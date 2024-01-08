import React from "react";
import ImageSlider from "../../components/about-us/image-slider/image-slider";
import "./about-us-page.css";
import { MakeupImage, SkincareImage, UsImage, Value1, Value2, Value3, Value4, Value5, Value6 } from './imports';
const sliderImages = [UsImage, SkincareImage, MakeupImage];

const valueImages = [Value1, Value2, Value3, Value4, Value5, Value6];

const AboutUsPage = () => {
  const imageWidth = `calc(100% / ${valueImages.length} - 32px)`;

  return (
    <div className="AboutUsPage-shine about-us-page">
      <div className="flex-col content-container">
        <div className="hero-image">
          <img src={UsImage} alt="us" />
        </div>
        <div className="sectionContainer flex-col">
          <div className="section gap-md flex-col">
            <h2 className="h2">What we do.</h2>
            <p className="body">
              At ShineAura, we are committed to delivering a comprehensive
              beauty experience through two primary areas: Skincare and Makeup.
            </p>
            <div className="flex-row">
              <div className="flex-col">
                <img className="img-size" src={SkincareImage} alt="" />
                <div className="md-spc gap-ms flex-col ivory-bg">
                  <h3 className="h3">Skincare</h3>
                  <p className="body">
                    Revitalize and nurture your skin with our premium skincare
                    products. From gentle cleansers to moisturizing creams, our
                    offerings cater to all skin types.{" "}
                  </p>
                </div>
              </div>
              <div className="flex-col">
                <img className="img-size" src={MakeupImage} alt="" />
                <div className="md-spc gap-ms flex-col ivory-bg">
                  <h3 className="h3">Makeup</h3>
                  <p className="body">
                    Unleash your creativity with our diverse makeup collection.
                    From lipsticks to eyeshadows, our products are designed to
                    enhance your features and let your unique beauty shine.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sectionContainer flex-col ourStoryContainer">
          <div className="section our-story">
            <div className="right-container flex-row">
              <ImageSlider images={sliderImages} />
            </div>
            <div className="left-container flex-col flex-align-top gap-xs">
              <p className="pre-title">About us</p>
              <h2 className="h2">Our Story</h2>
              <p className="body-bld">A PASSIONATE BEGINNING:</p>
              <p className="body">
                ShineAura was born from the passion and belief that beauty is a
                way to celebrate the natural beauty of every woman. We embarked
                on this journey with the desire to bring confidence and natural
                beauty to women through high-quality and unique products.
              </p>
            </div>
          </div>
        </div>
        <div className="sectionContainer flex-col">
          <div className="section flex-col our-value gap-lg">
            <h2 className="h2">OUR VALUE</h2>
            <div className="flex-row flex-l gap-md value-images">
              {valueImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${index + 1}`}
                  style={{ width: imageWidth }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
