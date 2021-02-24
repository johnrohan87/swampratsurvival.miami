import React, { useState, useEffect, Fragment, useContext } from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from 'containers/App/app.style';
import { ResetCSS } from 'common/assets/css/style';
import Navbar from 'containers/App/Navbar';
import DomainSection from 'containers/App/SRSBanner';

import { DrawerProvider } from 'common/contexts/DrawerContext';
import { GlobalContextProvider } from 'common/contexts/GlobalContext';
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
  //const dispatch = useContext(GlobalDispatchContext);
  //const state = useContext(GlobalStateContext);
  //console.log(dispatch);
  //console.log(state);

  return (
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
            </DrawerProvider>
          </Sticky>
          <GlobalContextProvider>
            <h1>Hello from Swamp Rat Survival</h1>
            <h2>{/*state.user ? "Loged in as " + state.user : "Not Loged In"*/}</h2>
            <Link to="/app" >Go to App Page</Link>
            <DomainSection />
          </GlobalContextProvider>
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
