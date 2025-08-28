import styles from './Index.module.css';

import Button from '../../components/Button/Button';
import IndexImg from '../../components/IndexImg/IndexImg';

export default function Index() {
  return (
    <div className={styles.indexWrapper}>
      <IndexImg />
      <h1 className={styles.heading}>welcome to things!</h1>
      <p className={styles.subheading}>
        we sell stuff. what kind of stuff? yes!
      </p>
      <Button to="/products">show me things</Button>
    </div>
  );
}
