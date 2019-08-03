import React from 'react';

import styles from './button.module.css'

function Button({buttonTxt, clickEvt, disabled}) {
  const classes = (disabled) ? 
    `${styles.button} ${styles.disabled}` 
    : 
    `${styles.button}`

  return (
    <button 
      className={classes}
      onClick={clickEvt}>
        {buttonTxt}
    </button>
  );
}

export default Button;
