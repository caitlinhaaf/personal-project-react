import React from 'react';
import './App.css'

import SearchForm from './components/searchForm'
import Loader from './components/loader'
import SearchResults from './components/searchResults'

import {setErrorState, setEventData, setNewSearch, searchIdUpdate, setEventsLoading} from './utils/actions'

class App extends React.Component {

  state = {
    events: [],
    searchVisible: true,
    searchID: "", 
    submitDisable: true,
    isLoading: false,
    hasError: false,
    errorMsg: ""
  };

  // Helper Functions
  searchSubmit = () => {

    this.setState(setEventsLoading())

    fetch(`https://api.github.com/users/${this.state.searchID}/events`)
      // check status of request before proceeding, throw error if neccessary
      .then(res => {
        const status = res.status;
        if (status === 200) return res.json();
        else if(status === 404) throw new Error("Invalid user ID - try another name.");
        else throw new Error("Server not found - please try again later.");
      })
      .then(
        result => {
          this.setState(setEventData(result))
        },
        error => {
          this.setState(setErrorState(error.message))
        }
      );
  }

  searchUpdate = e => {
    const searchTxt = e.target.value;
    this.setState(searchIdUpdate(searchTxt))
  }

  backToSearch = () => {this.setState(setNewSearch())}

  // Render
  render(){

    return (
      <section>

        {/* overlay loader element if loading events*/}
        { (this.state.isLoading && <Loader />) }

        {
          this.state.searchVisible ? (

            <SearchForm 
              searchSubmit={this.searchSubmit}
              searchUpdate={this.searchUpdate}
              submitDisable={this.state.submitDisable}
              hasError={this.state.hasError}
              errorMsg={this.state.errorMsg}>
               <h3>Github User:</h3>
            </SearchForm>

          ) : (

            <SearchResults 
                header={this.state.searchID}
                btnEvent={this.backToSearch}
                events={this.state.events} />
          )
        }
      </section>  
    );
  }
  
}
export default App;
