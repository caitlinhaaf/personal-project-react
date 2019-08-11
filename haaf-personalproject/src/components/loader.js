import React from 'react';

import styles from './loader.module.css'

import logo from '../assets/githubLogo.png';

const Loader = () => {
  return (
    <div className={styles.loader}>
        <div className={styles.loaderContainer}>
            <img 
                className={styles.loaderImg}
                src={logo} 
                alt="Github loader"/>
            <p>Loading...</p>
        </div>
    </div>
  );
}

export default Loader;
