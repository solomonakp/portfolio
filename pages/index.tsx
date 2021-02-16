import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
} from '../redux/actions/counterActions';
import Link from 'next/link';

export default function Home(props) {
  const dispatch = useDispatch();
  // console.log(props);

  return (
    <div className='container'>
      <Head>
        <title>Chokor Solomon</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
