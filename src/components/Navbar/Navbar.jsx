import styles from './Navbar.module.css';

import { Form, NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CartButton from '../CartButton/CartButton';

export default function Navbar({ handleOpenCart }) {
  const [searchParams] = useSearchParams();
  const qParam = searchParams.get('q') || '';

  const [search, setSearch] = useState(qParam);

  useEffect(() => {
    setSearch(qParam);
  }, [qParam]);

  return (
    <header className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        things!
      </NavLink>
      <nav>
        <Form action="/products">
          <input
            type="search"
            name="q"
            placeholder="search things..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={styles.searchBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>magnify</title>
              <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </button>
        </Form>
        <CartButton onClick={handleOpenCart} />
      </nav>
    </header>
  );
}
