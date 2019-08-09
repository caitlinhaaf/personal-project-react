import React from 'react';

import styles from './searchForm.module.css'

import Button from './button.js'

class SearchForm extends React.Component {

  state = {
    searchVisible: true,
    events: [],
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

        {/* <input 
          onChange={searchUpdate}
          className={(!this.state.hasError) ? "searchInput" : "searchInput error"}
          type="text" 
          name="userName"/>
        
        { this.state.hasError &&
            <p className="errorMsg">{this.state.errorMsg}</p>
        }

        <Button 
          buttonTxt="GET USER" 
          clickEvt={searchSubmit}
          disabled={this.state.submitDisable}
          /> */}

      </section>
    )
  }

}

export default SearchForm;
