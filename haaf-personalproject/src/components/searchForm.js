import React from 'react';
import { connect } from "react-redux";

import styles from './searchForm.module.css'

import Button from './button'
import TextInput from './textInput'

const SearchForm = ({searchSubmit, searchUpdate, ...props}) => {

    return(
      <section className={styles.searchForm}>
        {props.children}
        
        <TextInput 
          updateEvent = {searchUpdate}
          hasError = {props.hasError}
          errorMsg = {props.errorMsg}/>

        <Button 
          clickEvt={searchSubmit}
          disabled={props.submitDisable}
          >
          GET USER
        </Button>
      </section>
    )
}

const mapStateToProps = state => (
  {
    submitDisable: state.search.submitDisable,
    hasError: state.search.hasError,
    errorMsg: state.search.errorMsg
  }
)

export default connect(
  mapStateToProps,
  null
)(SearchForm);