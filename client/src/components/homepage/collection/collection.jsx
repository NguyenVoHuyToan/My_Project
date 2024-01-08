import React from "react";
import "./collection.scss";

import {All,Eyes,Face,Eyeliner,Lips,Blush1,Cleanser,Mask, Moisturizer,Mascara,Foundation,Sunscreen} from './imports'

const Collection = () => {
  return (
    <div className="collection-comp flex-col">
      <div className="home-collection">
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={All} alt="All" />
            <p className="text-collection h4">ALL</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Lips} />
            <p className="text-collection h4">LIPSTICKS</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Foundation} />
            <p className="text-collection h4">FOUNDATION</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Face} />
            <p className="text-collection h4">FACEPOWER</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Mascara} />
            <p className="text-collection h4">MASCARA</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Eyes} />
            <p className="text-collection h4">EYESHADOW</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Eyeliner} />
            <p className="text-collection h4">EYELINER</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Mask} />
            <p className="text-collection h4">MASK</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Cleanser} />
            <p className="text-collection h4">CHEANSER</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Blush1} />
            <p className="text-collection h4">BRUSHES</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Sunscreen} />
            <p className="text-collection h4">SUNSCEEN</p>
          </a>
        </div>
        <div className="collection-card-list">
          <a href="#" className="collection-card-item">
            <img src={Moisturizer} />
            <p className="text-collection h4">MOISTURIZER</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collection;
