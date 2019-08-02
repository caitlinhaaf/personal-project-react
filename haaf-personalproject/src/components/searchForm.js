import React from 'react';

import styles from './searchForm.module.css'

import Button from './button.js'

function SearchForm() {
  return (
    <div className={styles.searchForm}>
      <h3>Github User:</h3>
      <input 
        className={styles.textinput}
        type="text" 
        name="userName"/>

      <Button 
        buttonTxt="GET USER" />

    </div>
  );
}

export default SearchForm;
