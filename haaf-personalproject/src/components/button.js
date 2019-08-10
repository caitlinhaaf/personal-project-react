import React from 'react';

import styles from './button.module.css'

function Button({clickEvt, disabled, ...rest}) {
  const classes = (disabled === true) ? 
    `${styles.button} ${styles.disabled}` 
    : 
    `${styles.button}`

  return (
    <button 
      className={classes}
      onClick={clickEvt}
      disabled={disabled}>
        {rest.children}
    </button>
  );
}

export default Button;
