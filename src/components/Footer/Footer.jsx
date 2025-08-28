import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>things!</div>
      <div>
        © 2025 <span style={{ fontStyle: 'italic' }}>things!</span> All rights
        reserved. Probably.
      </div>
      <div className={styles.signature}>
        Designed and developed by{' '}
        <a
          href="http://www.javierquiroga.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my portfolio"
        >
          Javier Quiroga
        </a>{' '}
        - Check it out on{' '}
        <a
          href="https://github.com/cd-javier/shopping-cart"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
