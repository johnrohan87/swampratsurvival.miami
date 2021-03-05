import React, { useState, useEffect, Fragment } from 'react';
//import { Link } from "gatsby";
import StoreProvider from '../common/components/storeProvider';
import App from './app';

import store from '../store/index';
import { appTheme } from 'common/theme/app';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { Modal } from '@redq/reuse-modal';
import {
  GlobalStyle,
  AppWrapper,
} from 'containers/App/app.style';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/App/Navbar';
import Footer from 'containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import SEO from 'components/seo';


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
      <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="App | A react next landing page" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
              {()=>store.map(item => item)}
              {()=>data.map(item => item)}
              
            </DrawerProvider>
          </Sticky>
          
          <App props={innerWidth} />

          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
    </StoreProvider>
  );
};
