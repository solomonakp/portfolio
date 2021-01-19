import Head from 'next/head';
import { useSelector } from 'react-redux';
export default function about() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className='container'>
      <Head>
        <title>About</title>
      </Head>
      <div className='counter'>{count}</div>
    </div>
  );
}
