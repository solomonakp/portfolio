import React from 'react';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps}></Component>, Component.title);
};

export default wrapper.withRedux(MyApp);
