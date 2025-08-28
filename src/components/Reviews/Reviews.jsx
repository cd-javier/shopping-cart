import styles from './Reviews.module.css';

const star = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>star</title>
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>
);

const starOutline = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>star-outline</title>
    <path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
  </svg>
);

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', {
    month: 'long',
    year: 'numeric',
  });
}

function Rating({ rating }) {
  return (
    <div className={styles.rating}>
      {Array.from({ length: rating }, (_, i) => (
        <span key={i}>{star}</span>
      ))}
      {Array.from({ length: 5 - rating }, (_, i) => (
        <span key={i}>{starOutline}</span>
      ))}
    </div>
  );
}

function Review({ review }) {
  const { rating, comment, date, reviewerName } = review;

  return (
    <div className={styles.review}>
      <div className={styles.heading}>
        <div className={styles.name}>{reviewerName}</div>
        <div className={styles.date}>({formatDate(date)})</div>
      </div>
      <div className={styles.comment}>{comment}</div>
      <Rating rating={rating} />
    </div>
  );
}

export default function Reviews({ reviews, className }) {
  return (
    <div className={`${styles.reviews} ${className ? className : undefined}`}>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <Review review={review} key={index} />
      ))}
    </div>
  );
}
