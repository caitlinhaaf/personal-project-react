import React from 'react';
import './App.css'

import Button from './components/button.js'
import EventList from './components/eventList'

class App extends React.Component {

  state = {
    searchVisible: true,
    pullReqEvents: [],
    forkEvents: [],
    searchID: "", 
    submitDisable: true,
    isLoading: false,
    hasError: false,
    errorMsg: ""
  };

  // Helper Functions
  searchSubmit = () => {
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

            pullReqEvents: result.filter( event => (
              event.type === "PullRequestEvent"
            // reduce to map
            )).reduce( (accumulator, event) => {
              accumulator=[...accumulator, {
                id: event.id,
                repoName: event.payload.pull_request.title,
                repoUrl: event.payload.pull_request.html_url,
                pullReqStatus: event.payload.pull_request.state
              }]
              return accumulator
            }, []),

            forkEvents: result.filter( event => (
              event.type === "ForkEvent"
             )).reduce( (accumulator, event) => {      
              accumulator=[...accumulator, {
                id: event.id,
                repoName: event.payload.forkee.full_name,
                repoUrl: event.payload.forkee.html_url,
                forkedFrom: event.repo.name
              }]
              return accumulator  
            }, []),

            hasError: false,
            errorMsg: "",
            searchVisible: false
          });
        },
        error => {
          this.setState({
            hasError: true,
            errorMsg: error.message
          });
        }
      );
  }

  searchUpdate = (evt) => {
    const searchTxt = evt.target.value;
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
    return (
      <section>
        {
          this.state.searchVisible ? (
            <section className="searchForm">
              <h3>Github User:</h3>
              <input 
                onChange={this.searchUpdate}
                className={(!this.state.hasError) ? "searchInput" : "searchInput error"}
                type="text" 
                name="userName"/>
              
              { this.state.hasError &&
                  <p className="errorMsg">{this.state.errorMsg}</p>
              }

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
                  events={this.state.forkEvents}/>
        
                <EventList 
                  header="Recent Pull Requests"
                  events={this.state.pullReqEvents}/>

              </section>
          )
        }
      </section>  
    );
  }
  
}
export default App;
