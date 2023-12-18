import React, { useEffect, useState } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import './Carouse/CarouseItem.css';
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY >= 2000);
    };

    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <button className="scroll-top" onClick={scrollToTop}>
          {<ArrowUpOutlined />}
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
