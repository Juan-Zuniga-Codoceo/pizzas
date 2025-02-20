// src/components/ScrollTop.js
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/components/ScrollTop.css';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <FaArrowUp size={30} />
        </div>
      )}
    </div>
  );
};

export default ScrollTop;
