import Head from 'next/head';
import { useSelector } from 'react-redux';
function about() {
  // const count = useSelector((state) => state.counter.value);
  return (
    <div className='container'>
      <Head>
        <title>About</title>
      </Head>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default about;
