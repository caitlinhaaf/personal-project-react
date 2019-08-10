import React from 'react';

import styles from './searchForm.module.css'

import Button from './button'
import TextInput from './textInput'

class SearchForm extends React.Component {

  state = {
    searchID: "", 
    submitDisable: true,
    isLoading: false,
    hasError: false,
    errorMsg: ""
  }

  render(){
    return(
      <section className={styles.searchForm}>
        <h3>Github User:</h3>
        
        {/* <TextInput 
          updateEvent = {this.searchUpdate}
          hasError = {this.state.hasError}
          errorMsg = {this.state.errorMsg}/>

        <Button 
          buttonTxt="GET USER" 
          clickEvt={this.searchSubmit}
          disabled={this.state.submitDisable}
          /> */}

      </section>
    )
  }
}

export default SearchForm;
