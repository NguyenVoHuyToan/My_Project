import React from 'react'
import "./collection.scss";
const Title = ({image, title}) => {
  return (
    <div>
           <img src={image}/>
            <p className="text-collection h4" >{title}</p>
    </div>
  )
}

export default Title