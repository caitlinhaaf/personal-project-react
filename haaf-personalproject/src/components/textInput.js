import React from 'react';

import styles from './textInput.module.css'

const TextInput =({updateEvent, hasError, errorMsg, ...rest}) => {

  const classes = (hasError === true) ? 
    `${styles.textInput} ${styles.error}` 
    : 
    `${styles.textInput}`

  return (
    <div>
        <input 
            onChange={updateEvent}
            className={classes}
            type="text" 
            name="userName"/>
        
        { hasError &&
            <p className={styles.errorMsg}>{errorMsg}</p>
        }
    </div>
  );
}

export default TextInput;
