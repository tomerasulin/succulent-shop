import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from '../components/Header.js';
import Product from '../components/Product';
import { getProductsData } from '../lib/products';
import Footer from '../components/Footer';
import { useRef } from 'react';

export async function getStaticProps() {
  const allProductsData = getProductsData();
  return {
    props: {
      allProductsData: allProductsData ? allProductsData : null,
    },
  };
}

export default function Home({ allProductsData }) {
  let scollToRef = useRef();

  const scrollHandler = () => {
    scollToRef.current.scrollIntoView();
  };

  return (
    <>
      <Head>
        <title>Succulent Shop</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header scrollHandler={scrollHandler} />
      <main className={styles.main} ref={scollToRef}>
        <h1 className={styles.mainTitle}>Let&apos;s find your prefect succulent</h1>
        <ul className={styles.products}>
          {allProductsData &&
            allProductsData.map((product) => (
              <li className={styles.product} key={product.id}>
                <Product product={product} />
              </li>
            ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
