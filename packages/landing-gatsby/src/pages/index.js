import React from 'react';
import { Link } from "gatsby";
import StoreProvider from '../common/components/storeProvider';
import { App } from './app';

export default ({data}) => {  

  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};
