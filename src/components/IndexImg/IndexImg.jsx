import styles from './IndexImg.module.css';
import cart from './assets/cart.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img7 from './assets/img7.png';

const elements = [img1, img2, img3, img4, img5, img7];

const positions = [
  { x: -80, y: -80 },
  { x: 80, y: -60 },
  { x: -120, y: 10 },
  { x: 120, y: 30 },
  { x: -50, y: 100 },
  { x: 60, y: 90 },
];

export default function IndexImg() {
  return (
    <div className={styles.indexImg}>
      <img src={cart} className={styles.cart} alt="cart" />
      {elements.map((img, index) => {
        const { x, y } = positions[index];
        return (
          <div
            key={index}
            className={styles.positionWrapper}
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <div
              className={styles.floatingWrapper}
              style={{ animationDelay: `${Math.random() * 2}s` }}
            >
              <img src={img} alt={`floating-${index}`} className={styles.alt} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
