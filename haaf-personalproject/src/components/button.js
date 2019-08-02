import React from 'react';

import styles from './button.module.css'

function Button({buttonTxt}) {
  return (
    <button className={styles.button}>
        {buttonTxt}
    </button>
  );
}

export default Button;
