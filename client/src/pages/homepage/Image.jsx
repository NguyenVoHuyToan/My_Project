import React from 'react'
import './homepage.scss'
const Image = ({image1, image2, image3}) => {
  return (
    <div className="pic-parent">
        <img className="pic-1" src={image1} alt='pic1'/>
        <img className="pic-2" src={image2} alt='pic2'/>
        <img className="pic-3" src={image3} alt='pic3'/>
    </div>
  )
}

export default Image