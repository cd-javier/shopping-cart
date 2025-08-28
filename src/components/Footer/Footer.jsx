import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>things!</div>
      <div>
        © 2025 <span style={{ fontStyle: 'italic' }}>things!</span> All rights
        reserved. Probably.
      </div>
    </footer>
  );
}
