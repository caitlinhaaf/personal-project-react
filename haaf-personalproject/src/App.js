import React from 'react';
import './App.css'

import SearchForm from './components/searchForm'
import EventList from './components/eventList'

import Button from './components/button'
import TextInput from './components/textInput'

import {isPullReqType, isForkType} from './utils/dataTransform.utils'

class App extends React.Component {

  state = {
    searchVisible: true,
    events: [],
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
      // check status of request before rendering
      .then(res => {
        const status = res.status;
        if (status === 200) return res.json();
        else if(status === 404) throw new Error("Invalid user ID - try another name.");
        else throw new Error("Server not found - please try again later.");
      })
      .then(
        result => {
          this.setState({
            events: result.filter( event => (
              isPullReqType(event.type) || isForkType(event.type)
            )),
            hasError: false,
            errorMsg: "",
            searchVisible: false,
            isLoading: false,
          });
        },
        error => {
          this.setState({
            hasError: true,
            errorMsg: error.message,
            isLoading: false,
          });
        }
      );
  }

  searchUpdate = (event) => {
    const searchTxt = event.target.value;
    const submitDisable = (searchTxt.length > 0) ? false : true;
    this.setState({
      searchID: searchTxt,
      submitDisable: submitDisable
    })
  }

  backToSearch = () => {
    this.setState({
      searchVisible : true, 
      pullReqEvents: [],
      forkEvents: [],
      searchID: "",
      submitDisable: true
    })
  }

  // Render
  render(){
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

        {
          this.state.searchVisible ? (

            // <SearchForm 
            //   searchSubmit={this.searchSubmit}
            //   searchUpdate={this.searchUpdate}/>
              
            <section className="searchForm">
              <h3>Github User:</h3>

              <TextInput 
                updateEvent = {this.searchUpdate}
                hasError = {this.state.hasError}
                errorMsg = {this.state.errorMsg}/>

              <Button 
                buttonTxt="GET USER" 
                clickEvt={this.searchSubmit}
                disabled={this.state.submitDisable}
                />
            </section>

          ) : (
            
            <section className="searchResults">
              <Button 
                  buttonTxt="&larr; Back to Search"
                  clickEvt={this.backToSearch}/>

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
