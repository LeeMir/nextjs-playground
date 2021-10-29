import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [title, setTitle] = useState<string>('Home');
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href='/list'>
            <a>List</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home;
