import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles['layout']}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
