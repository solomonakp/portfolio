import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { getLayout } from '../components/Layout/Layout';

const Index = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <Head>
        <title>Chokor Solomon</title>
      </Head>

      <style jsx>{``}</style>
    </div>
  );
};

Index.getLayout = getLayout;

export default Index;
