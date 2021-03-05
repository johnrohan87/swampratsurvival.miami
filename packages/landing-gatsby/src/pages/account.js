import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import StoreProvider from '../common/components/storeProvider';
import App from './app';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default ({data}) => {  
  const size = process.browser && useWindowSize();
  const innerWidth = process.browser && size.innerWidth;

  return (
    <StoreProvider>
      <Link to="/">Home</Link>
      <App props={innerWidth} />
    </StoreProvider>
  );
};
