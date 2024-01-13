import React from 'react'
import './homepage.scss'
const TitleHomePage = ({content, title, text}) => {
  return (
    <div className='title flex-col gap-sm'>
        <h1 className="shineaura h1">{content}</h1>
        <h3 className="connect-with-radiant subtitle ">{title}</h3>
        <div className="content body">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TitleHomePage