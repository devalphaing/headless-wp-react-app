import React from "react";
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles['head-container']}>
      <div className={styles['head-text']}>Write blogs that inspire creativity.</div>
      <div className={styles['head-desc']}>Where vision meets precision</div>
    </div>
  );
};

export default Home;
