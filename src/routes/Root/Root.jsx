import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Root.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Cart from '../../components/Cart/Cart';

export default function Root() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    function handleCartOpen() {
      setIsCartOpen(true);
    }

    window.addEventListener('cart:open', handleCartOpen);

    return () => {
      window.removeEventListener('cart:open', handleCartOpen);
    };
  }, []);

  return (
    <>
      <Cart isOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />
      <div className={styles.wrapper}>
        <Navbar handleOpenCart={() => setIsCartOpen(true)} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
