import type { NextPage } from 'next'
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <link rel="shortcut icon" href="favicon.svg" type="image/x-icon"/>
          <title> Staage | Marketing para todo mundo</title>
      </Head>

      <Header />

      <Hero />
      
    </div>
  );
}

export default Home
