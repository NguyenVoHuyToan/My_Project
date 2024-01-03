import React, { useRef, useState, useEffect } from 'react';
import "./product-description.css";

const ProductDescription = ({ description }) => {
    const detailContentRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [detailContentHeight, setDetailContentHeight] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const checkScrollPosition = () => {
        setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('scroll', checkScrollPosition);
        return () => window.removeEventListener('scroll', checkScrollPosition);
    }, []);

    useEffect(() => {
        if (detailContentRef.current) {
            setDetailContentHeight(detailContentRef.current.offsetHeight);
        }
    }, []);

    let iconState = "bi bi-chevron-down"

    const handleClick = () => {
        setIsExpanded(!isExpanded);
        if (iconState === "bi bi-chevron-down") {
            iconState = "bi bi-chevron-up"
        } else {        
            iconState = "bi bi-chevron-down"
        }
    };

    return (
        <div className="detail-container flex-col">
            <div className="detail-nav flex-row align-right">
                <div className="detail-nav-btn active flex-row body-bld">Product Detail</div>
                <div className="detail-nav-btn unactive flex-row body-bld">Product Ingredients</div>
                <div className="detail-nav-btn unactive flex-row body-bld">How to use</div>
            </div>
            <div className={`detail-content flex-col gap-ms ${isExpanded ? 'expanded' : ''}`} ref={detailContentRef}>
                <div className="detail-content-item flex-col gap-sm body-lgt align-left">
                    {description.map((para, index) => (
                        <p key={index} className='content-item'>
                            {para}
                        </p>
                    ))}
                </div>
            {scrollPosition > detailContentHeight && <i className={`expand-icon icon-size-20 ${iconState} ${isExpanded ? 'expanded' : ''}`} onClick={handleClick}></i>}
            </div>
        </div>
    )
};

export default ProductDescription;
