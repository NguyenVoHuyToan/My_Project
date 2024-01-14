import React from "react";
import "./collection.scss";

import {
  All,
  Eyes,
  Face,
  Eyeliner,
  Lips,
  Blush1,
  Cleanser,
  Mask,
  Moisturizer,
  Mascara,
  Foundation,
  Sunscreen,
} from "./imports";
import Title from "./Title";

const collections = [
  {
    image: All,
    title: "All",
  },
  {
    image: Eyes,
    title: "EYESHADOW",
  },
  {
    image: Face,
    title: "FACEPOWER",
  },
  {
    image: Eyeliner,
    title: "EYELINER",
  },
  {
    image: Lips,
    title: "LIPSTICKS",
  },
  {
    image: Blush1,
    title: "BRUSHES",
  },
  {
    image: Cleanser,
    title: "CLEANSER",
  },
  {
    image: Mask,
    title: "MASK",
  },
  {
    image: Moisturizer,
    title: "MOISTURIZER",
  },
  {
    image: Mascara,
    title: "MASCARA",
  },
  {
    image: Foundation,
    title: "FOUNDATION",
  },
  {
    image: Sunscreen,
    title: "SUNSCEEN",
  },
];

const Collection = () => {
  return (
    <>
      {collections.map((item, index) => {
        return (
          <div className="collection-comp">
            <div key={index} className="home-collection">
              <a href="#" className="collection-card-item">
                <Title image={item.image} title={item.title} />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Collection;
