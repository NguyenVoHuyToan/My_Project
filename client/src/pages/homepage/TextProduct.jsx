import React from 'react'
import './homepage.scss'
const TextProduct = ({content, title}) => {
  return (
    <div className="text-product">
        <h1 className="products h1">{content}</h1>
        <p className="at-shineaura-we body">{title}</p>
    </div>
  )
}

export default TextProduct