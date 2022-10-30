import Head from 'next/head';
import {Header} from '../components/Header';
import {Home} from '../components/Home';
import styles from '../styles/HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Umesh Kadam</title>
        <meta
          name="description"
          content="Umesh Kadam Portfolio - umeshmk.github.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <Home />
      </div>
    </div>
  );
}
