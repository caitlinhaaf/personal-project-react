import React from 'react';
import { connect } from "react-redux";

import './App.css'

import SearchForm from './components/searchForm'
import Loader from './components/loader'
import SearchResults from './components/searchResults'

import {fetchGitData, searchIdUpdate, setEventsLoading} from './utils/actions'

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
    const { isLoading, searchVisible  } = this.props;
    return (
      <section>

        {/* overlay loader element if loading events*/}
        { (isLoading && <Loader />) }

        {
          searchVisible ? (

            <SearchForm 
              searchSubmit={this.searchSubmit}
              searchUpdate={this.searchUpdate}>
               <h3>Github User:</h3>
            </SearchForm>

          ) : (
            <SearchResults />
          )
        }
      </section>  
    );
  }
}

const mapStateToProps = state => (
  {
    searchVisible: state.search.searchVisible,
    searchID: state.search.searchID, 
    isLoading: state.search.isLoading
  }
)

const mapDispatchToProps = {
  fetchGitData,
  searchIdUpdate, 
  setEventsLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
