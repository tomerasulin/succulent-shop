import { getAllProductsIds, getProductData } from '../../lib/products';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Image from 'next/image';
import productStyles from '@/styles/Product.module.css';

export async function getStaticProps({ params }) {
  const productData = await getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProductsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Products({ productData }) {
  return (
    <>
      <main className={productStyles.productMain}>
        <Image
          alt='product image'
          src={productData.link}
          fill
          className={productStyles.productImage}
          sizes='100vh'
        />
        <div className={productStyles.productDetails}>
          <h3 className={productStyles.productDescription}>
            {productData.name}
          </h3>
          <p className={productStyles.productDescription}>
            {' '}
            {productData.price}
          </p>
          <hr />
          <p className={productStyles.productDescription}>
            {productData.description}
          </p>
        </div>
      </main>
      <div className={productStyles.backToHome}>
        <Link href='/' className={productStyles.backText}>
          ← Back to home
        </Link>
      </div>
      <Footer />
    </>
  );
}
