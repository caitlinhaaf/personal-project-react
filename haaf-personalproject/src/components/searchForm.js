import React from 'react';

import styles from './searchForm.module.css'

import Button from './button'
import TextInput from './textInput'

const SearchForm = ({searchSubmit, searchUpdate, submitDisable, hasError, errorMsg, ...rest}) => {

    return(
      <section className={styles.searchForm}>
        {rest.children}
        
        <TextInput 
          updateEvent = {searchUpdate}
          hasError = {hasError}
          errorMsg = {errorMsg}/>

        <Button 
          clickEvt={searchSubmit}
          disabled={submitDisable}
          >
          GET USER
        </Button>
      </section>
    )
}

export default SearchForm;
