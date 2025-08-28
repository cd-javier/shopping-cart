import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import styles from './Root.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Cart from '../../components/Cart/Cart';

export default function Root() {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
