import React from 'react'
import styles from './Footer.module.css';

const Footer = ()=> {
  return (
    <div className={styles['container']}>
        <p>
            &copy; {new Date().getFullYear()} DevAlpha Theme. All rights reserved.
        </p>
    </div>
  );
}

export default Footer;