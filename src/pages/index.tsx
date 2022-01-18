import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Index from '../components/Index';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bnstats</title>
        <meta name="description" content="Get info on your BNS domain name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
