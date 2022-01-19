import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Index from '../components/Index';
import Title from '../components/Title';

const Container = styled.div``;

const Body = styled.div`
  min-height: 90vh;
  display: grid;
  grid-template-rows: 1fr 3fr;
  padding: 0 2rem;
`;

const Footer = styled.div`
  display: flex;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Bnstats</title>
        <meta name="description" content="Get info on your BNS domain name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Title />
        <Index />
      </Body>
      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </Footer>
    </Container>
  );
};

export default Home;
