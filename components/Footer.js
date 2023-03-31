import logo from '../public/images/Logo.svg';
import github from '../public/images/githubIcon.svg';
import linkedin from '../public/images/LinkedIn.svg';
import downloadCV from '../public/images/cvdownload.svg';
import tomerCV from '../public/TomerAsulinCV.pdf';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <Image className={styles.footerLogo} src={logo} alt='Logo TA' />
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Tomer Asulin
        </p>
      </div>
      <nav className={styles.footerGroups}>
        <ul className={styles.footerGroupLink}>
          <li className={styles.footerLink}>
            <a
              className={styles.footerLink}
              href={tomerCV}
              target='_blank'
              rel='noreferrer'
              download
            >
              <Image
                className={styles.footerLogoLink}
                src={downloadCV}
                alt='CV logo'
              />
            </a>
          </li>
          <li className={styles.footerLink}>
            <a
              className={styles.footerLink}
              href='https://github.com/tomerasulin'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.footerLogoLink}
                src={github}
                alt='GitHub Logo'
              />
            </a>
          </li>
          <li className={styles.footerLink}>
            <a
              className={styles.footerLink}
              href='https://www.linkedin.com/in/tomerasulin/'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.footerLogoLink}
                src={linkedin}
                alt='LinkedIn Logo'
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
