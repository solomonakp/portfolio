import React from 'react';
import { wrapper } from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps}></Component>);
};

export default wrapper.withRedux(MyApp);
