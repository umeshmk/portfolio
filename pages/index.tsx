import Head from 'next/head';
import {El} from '../components/Elements';
import {Header} from '../components/Header';
import {Home} from '../components/Home';
import styles from '../styles/Home.module.scss';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Umesh Kadam</title>
        <meta
          name="description"
          content="Umesh Kadam Portfolio - umeshmk.github.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.main}>
        <Home />
      </div>
    </div>
  );
}
