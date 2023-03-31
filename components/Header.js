import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Header({ scrollHandler }) {
  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src='/images/succulentCover2.jpg'
        alt='succulent cover'
        fill
        priority
      />
      <p className={styles.description}>The Succulent Shop</p>
      <h1 className={styles.title}>
        You can't buy happiness, but you can buy even more succulents and that's
        pretty much the same thing.
      </h1>
      <button className={styles.btn} onClick={scrollHandler}>
        Shop Succulents
      </button>
    </div>
  );
}
