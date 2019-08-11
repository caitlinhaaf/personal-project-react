import React from 'react';
import { connect } from "react-redux";

// import store from './utils/store'

import './App.css'

import SearchForm from './components/searchForm'
import Loader from './components/loader'
import SearchResults from './components/searchResults'

import {fetchGitData, setErrorState, setEventData, setNewSearch, searchIdUpdate, setEventsLoading} from './utils/actions'

class App extends React.Component {

  // state = {
  //   events: [],
  //   searchVisible: true,
  //   searchID: "", 
  //   submitDisable: true,
  //   isLoading: false,
  //   hasError: false,
  //   errorMsg: ""
  // }

  // const {setErrorState, setEventData, setNewSearch, searchIdUpdate, setEventsLoading} = this.props

  // Helper Functions
  searchSubmit = () => {

    this.props.setEventsLoading();
    this.props.fetchGitData();

    // this.setState(setEventsLoading())

    // fetch(`https://api.github.com/users/${this.state.searchID}/events`)
    //   // check status of request before proceeding, throw error if neccessary
    //   .then(res => {
    //     const status = res.status;
    //     if (status === 200) return res.json();
    //     else if(status === 404) throw new Error("Invalid user ID - try another name.");
    //     else throw new Error("Server not found - please try again later.");
    //   })
    //   .then(
    //     result => {
    //       this.setState(setEventData(result))
    //     },
    //     error => {
    //       this.setState(setErrorState(error.message))
    //     }
    //   );
  }

  searchUpdate = e => {
    const searchTxt = e.target.value;
    this.props.searchIdUpdate(searchTxt)
  }

  // backToSearch = () => {this.setState(setNewSearch())}

  // Render
  render(){
    console.log("APP PROPS", this.props)
    console.log(this.props.submitDisable)
    const { submitDisable, hasError, errorMsg, searchID, events, isLoading, searchVisible  } = this.props;

    console.log(submitDisable)

    return (
      <section>

        {/* overlay loader element if loading events*/}
        { (isLoading && <Loader />) }

        {
          searchVisible ? (

            <SearchForm 
              searchSubmit={this.searchSubmit}
              searchUpdate={this.searchUpdate}
              submitDisable={submitDisable}
              hasError={hasError}
              errorMsg={errorMsg}>
               <h3>Github User:</h3>
            </SearchForm>

          ) : (

            <SearchResults 
                header={searchID}
                btnEvent={this.props.setNewSearch}
                events={events} />
          )
        }
      </section>  
    );
  }
  
}

const mapStateToProps = state => {
  console.log("MAPPING TO PROPS", state)
  // console.log(state.gitSearchReducer.events)
  return {
    events: state.gitSearchReducer.events,
    searchVisible: state.gitSearchReducer.searchVisible,
    searchID: state.gitSearchReducer.searchID, 
    submitDisable: state.gitSearchReducer.submitDisable,
    isLoading: state.gitSearchReducer.isLoading,
    hasError: state.gitSearchReducer.hasError,
    errorMsg: state.gitSearchReducer.errorMsg
  }
}

const mapDispatchToProps = {
  fetchGitData,
  setErrorState, 
  setEventData, 
  setNewSearch, 
  searchIdUpdate, 
  setEventsLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
