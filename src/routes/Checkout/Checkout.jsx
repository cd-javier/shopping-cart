import styles from './Checkout.module.css';

import Button from '../../components/Button/Button';

export default function Checkout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        Checkout? In <span>this</span> economy?
      </div>
      <div className={styles.subheading}>
        This is a dummy site. You can't actually buy anything. But you can
        reflect on your choices.
      </div>
      <Button to="/products">return to the things</Button>
    </div>
  );
}
