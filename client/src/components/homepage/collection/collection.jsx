import React from 'react';
import './collection.scss';

import All from '../../../assets/img/homepage/all.jpg';
import Eyes from '../../../assets/img/homepage/eyeshadow.jpg';
import Face from '../../../assets/img/homepage/face-powder.png';
import Eyeliner from '../../../assets/img/homepage/eyeliner.png';
import Lips from '../../../assets/img/homepage/lipstick.jpg';
import Blush1 from '../../../assets/img/homepage/blush.jpg';
import Cleanser from '../../../assets/img/homepage/cleanser.jpg';
import Mask from '../../../assets/img/homepage/mask.jpg';
import Moisturizer from '../../../assets/img/homepage/moisturizer.jpg';
import Mascara from '../../../assets/img/homepage/mascara.jpg';
import Foundation from '../../../assets/img/homepage/foundation.jpg';
import Sunscreen from '../../../assets/img/homepage/sunscreen.jpg';

const Collection = () => {
    return (
        <div className='collection-comp flex-col'>
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
