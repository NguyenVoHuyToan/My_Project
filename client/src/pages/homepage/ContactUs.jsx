import React from 'react'
import "./homepage.scss";
const ContactUs = ({add1, add2, add3}) => {
  return (
    <>
    <div className="flex-row gap-xs">
        <i className="bi bi-envelope-fill"></i>
        <p>{add1}</p>
    </div>
    <div className="flex-row gap-xs">
        <i className=" bi bi-telephone-fill"></i>
        <p>{add2}</p>
    </div>
    <div className="flex-row gap-xs">
        <i className=" bi bi-telephone-fill"></i>
        <p>{add3}</p>
    </div>
    </>
  )
} 

export default ContactUs