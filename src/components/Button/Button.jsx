import styles from './Button.module.css';

import { NavLink } from 'react-router-dom';

export default function Button({
  to,
  type = 'button',
  onClick,
  children,
  className,
}) {
  if (to) {
    return (
      <NavLink
        to={to}
        className={`${styles.btn} ${className || ''}`}
        onClick={onClick || undefined}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${className || ''}`}
    >
      {children}
    </button>
  );
}
