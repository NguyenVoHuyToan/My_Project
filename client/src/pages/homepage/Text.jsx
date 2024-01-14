import React from 'react'
import './homepage.scss'
const Text = ({text1, text2}) => {
  return (
    <div className="text-content body flex-col gap-sm">
        <p>{text1}</p>
        <p>{text2}</p>
    </div>
  )
}

export default Text