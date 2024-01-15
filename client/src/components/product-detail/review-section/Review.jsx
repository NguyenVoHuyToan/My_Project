import React from 'react'
import "./review-section.css";
const Review = ({name, rate, date, comment}) => {
  return (
    <div className="review-item flex-col align-left gap-xs">
        <div className="rating-info">
          <div className="user-name">
            <p className="body-bld">{name}</p>
          </div>
          <div className="rating flex-row gap-2xs align-left">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <div className="rating-num">
            <p className="h3">{rate}</p>
          </div>
        </div>
        <div className="review-date">
          <p className="input-i-lgt">{date}</p>
        </div>
        <div className="review-content">
          <p className="body-lgt">
            {comment}
          </p>
        </div>
      </div>
  )
}

export default Review