import React from 'react';
import { connect } from "react-redux";

import './App.css'

import SearchForm from './components/searchForm'
import Loader from './components/loader'
import SearchResults from './components/searchResults'

import {fetchGitData, setNewSearch, searchIdUpdate, setEventsLoading} from './utils/actions'

class App extends React.Component {
  // Helper Functions
  searchSubmit = () => {
    this.props.setEventsLoading();
    this.props.fetchGitData(this.props.searchID);
  }
  searchUpdate = e => {
    const searchTxt = e.target.value;
    this.props.searchIdUpdate(searchTxt)
  }

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
    events: state.search.events,
    searchVisible: state.search.searchVisible,
    searchID: state.search.searchID, 
    submitDisable: state.search.submitDisable,
    isLoading: state.search.isLoading,
    hasError: state.search.hasError,
    errorMsg: state.search.errorMsg
  }
}

const mapDispatchToProps = {
  fetchGitData,
  setNewSearch, 
  searchIdUpdate, 
  setEventsLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
