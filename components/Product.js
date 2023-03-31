import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} scroll>
      <div className={styles.productImageContainer}>
        <Image
          alt='product image'
          src={product.link}
          fill
          className={styles.productImage}
          sizes='100vh'
        />
      </div>
      <div className={styles.productDetailsContainer}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p>{product.price}</p>
      </div>
      <p className={styles.productDescription}>{product.description}</p>
    </Link>
  );
}
