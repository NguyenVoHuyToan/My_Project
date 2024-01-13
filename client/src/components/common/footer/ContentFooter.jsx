import React from "react";
import "./footer.scss";

const ContentFooter = ({text, title1, title2, title3 }) => {
  return (
    <div>
      <div className="footer-contact-title h4">
        <p>{text}</p> <hr />
      </div>
      <div className=" flex-col footer-contact-content align-left gap-xs"> 
      <div className="flex-row gap-xs body-lgt">
        <i class="bi bi-envelope-fill"></i>
        <p>{title1}</p>
      </div>
      <div className="flex-row gap-xs body-lgt">
        <i class="bi bi-telephone-fill"></i>
        <p>{title2}</p>
      </div>
      <div className="flex-row gap-xs body-lgt">
        <i class="bi bi-geo-alt-fill"></i>
        <p>{title3}</p>
      </div>
      </div>
    </div>
  );
};

export default ContentFooter;
