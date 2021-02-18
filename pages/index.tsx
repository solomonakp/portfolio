import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import useTheme from '../components/useTheme';

export default function Home(props) {
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <Head>
        <title>Chokor Solomon</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
