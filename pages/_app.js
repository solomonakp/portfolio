import React from 'react';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps}></Component>
);

export default wrapper.withRedux(MyApp);
