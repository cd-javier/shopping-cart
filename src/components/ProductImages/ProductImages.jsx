import { useState } from 'react';

import styles from './ProductImages.module.css';

export default function ProductImages({ images }) {
  const [showingIndex, setShowingIndex] = useState(0);

  return (
    <div className={styles.productImages}>
      <img src={images[showingIndex]} alt="" />
      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setShowingIndex(index)}
              className={index === showingIndex ? styles.selected : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
