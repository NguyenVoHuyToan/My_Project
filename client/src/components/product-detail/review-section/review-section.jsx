import React from "react";
import "./review-section.css";
import Review from "./Review";

const ReviewSection = () => {
  return (
    <div className="review-container flex-col gap-ms align-left">
      <Review name="Alice" rate="5.0" date="dd/mm/yy" comment="..."/>
      <Review name="Joyce" rate="5.0" date="dd/mm/yy" comment="..."/>
      <Review name="Anna" rate="5.0" date="dd/mm/yy" comment="..."/>
      <Review name="Wendy" rate="5.0" date="dd/mm/yy" comment="..."/>
      <div className="paging flex-col">
        <p className="body-lgt">1 2 3 ... 99</p>
      </div>
    </div>
  );
};

export default ReviewSection;
