import React from "react";
import "./review-section.css";
import Review from "./Review";

const ReviewSection = () => {
  return (
    <div className="review-container flex-col gap-ms align-left">
      <Review/>
      <Review/>
      <Review/>
      <Review/>
      <div className="paging flex-col">
        <p className="body-lgt">1 2 3 ... 99</p>
      </div>
    </div>
  );
};

export default ReviewSection;
