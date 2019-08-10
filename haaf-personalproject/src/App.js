import React from 'react';
import './App.css'

import SearchForm from './components/searchForm'
import EventList from './components/eventList'
import Loader from './components/loader'

import Button from './components/button'

import {isPullReqType, isForkType} from './utils/dataTransform.utils'
import {setErrorState, setEventData, setNewSearch, searchIdUpdate} from './utils/actions'

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

    this.setState({isLoading: true})

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

  searchUpdate = ( e ) => {
    const searchTxt = e.target.value;
    this.setState(searchIdUpdate(searchTxt))
  }

  backToSearch = () => {this.setState(setNewSearch())}

  // Render
  render(){

    // transform event data before passing to smaller components
    const pullReqEvents = this.state.events.filter( event => (
      isPullReqType(event.type)
    )).map( event => (
      {
        id: event.id,
        repoName: event.payload.pull_request.title,
        repoUrl: event.payload.pull_request.html_url,
        pullReqStatus: event.payload.pull_request.state
      }
    ))

    const forkEvents = this.state.events.filter(event => (
      isForkType(event.type)
    )).map(event => (      
      {
        id: event.id,
        repoName: event.payload.forkee.full_name,
        repoUrl: event.payload.forkee.html_url,
        forkedFrom: event.repo.name
      }
    ));

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
            
            <section className="searchResults">
              <Button 
                  clickEvt={this.backToSearch}>
                  &larr; Back to Search
               </Button>

                <h1 className="searchUser">{this.state.searchID}</h1>
        
                <EventList 
                  header="Recent Forks"
                  events={forkEvents}/>
        
                <EventList 
                  header="Recent Pull Requests"
                  events={pullReqEvents}/>
              </section>
          )
        }
      </section>  
    );
  }
  
}
export default App;
