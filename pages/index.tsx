import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
} from '../redux/actions/counterActions';
import Link from 'next/link';

export default function Home(props) {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  // console.log(props);

  return (
    <div className='container'>
      <Head>
        <title>Chokor Solomon</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='counter'>{count}</div>

      <div className='btn-container'>
        {' '}
        <button onClick={() => dispatch(incrementCounter())}>increase</button>
        <button onClick={() => dispatch(decrementCounter())}>decrease</button>
      </div>
      <div className='btn-container'>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        button:first-of-type {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}
