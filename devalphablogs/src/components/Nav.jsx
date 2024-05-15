import React from 'react'
import styles from './Nav.module.css';
import { useNavigate } from 'react-router-dom';

const Nav = ()=> {

    const navigate = useNavigate();

    return (
    <div className={styles['container']}>
        <div className={styles['nav-container']}>
            <div className={styles['home'] + " " + styles['nav-click']} onClick={() => {navigate('/')}}>
                Home
            </div>
            <div className={styles['blogs'] + " " + styles['nav-click']} onClick={() => {navigate('/blogs')}}>
                Blogs
            </div>
            <div className={styles['about'] + " " + styles['nav-click']} onClick={() => {navigate('/about')}}>
                About                
            </div>
        </div>
    </div>
    );
}

export default Nav;