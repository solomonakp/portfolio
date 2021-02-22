import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import useTheme from '../components/useTheme';
import { getLayout } from '../components/Layout/Layout';

const Index = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <Head>
        <title>Chokor Solomon</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

Index.getLayout = getLayout;

export default Index;
