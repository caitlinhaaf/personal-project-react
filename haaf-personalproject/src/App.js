import React from 'react';
import './App.css'

// import SearchForm from './components/searchForm'
import Button from './components/button.js'
import EventList from './components/eventList'

// USING TEST API DATA
// import {events} from './testresults-events'

class App extends React.Component {

  state = {
    searchVisible: true,
    events: [],
    searchID: "", 
    btnDisable: true,
    isLoading: false,
    hasError: false,
    errorMsg: ""
  };

  searchSubmit = () => {
    fetch(`https://api.github.com/users/${this.state.searchID}/events`)
      // check status of request before rendering
      .then(res => {
        const status = res.status;
        // console.log("Server Status", status)
        if (status === 200) return res.json();
        else if(status === 404) throw new Error("Invalid user ID - try another name.");
        else throw new Error("Server not found - please try again later.");
      })
      .then(
        result => {
          this.setState({
            events: result,
            hasError: false,
            errorMsg: ""
          });
          console.log("API SUCCESS", this.state)
        },
        error => {
          this.setState({
            hasError: true,
            errorMsg: error.message
          });
          console.log("API ERROR", this.state)
        }
      );
  }

  searchUpdate = (evt) => {
    const searchTxt = evt.target.value;
    const btnDisable = (searchTxt.length > 0) ? false : true;
    this.setState({
      searchID: searchTxt,
      btnDisable: btnDisable
    })
  }

  render(){
    // filter pull request events
    const pullRequestEvents = this.state.events.filter( event => (
      event.type === "PullRequestEvent"
    )).reduce( (accumulator, event) => {
      accumulator=[...accumulator, {
        id: event.id,
        repoName: event.payload.pull_request.title,
        repoUrl: event.payload.pull_request.html_url,
        pullReqStatus: event.payload.pull_request.state
      }]
      return accumulator
    }, []);

    // filter fork events
    const forkEvents = this.state.events.filter( event => (
      event.type === "ForkEvent"
     )).reduce( (accumulator, event) => {      
      accumulator=[...accumulator, {
        id: event.id,
        repoName: event.payload.forkee.full_name,
        repoUrl: event.payload.forkee.html_url,
        forkedFrom: event.repo.name
      }]
      return accumulator
    }, []);

    return (
      <div>
        {/* if state search visible, display search form... */}
        {/* <SearchForm /> */}
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
            disabled={this.state.btnDisable}
            />
        </section>
  
        {/* else if state search visible is false, display result data... */}
        <section className="searchResults">
          <h1 className="searchUser">{this.state.searchID}</h1>
  
          <EventList 
            header="Recent Forks"
            events={forkEvents}/>
  
          <EventList 
            header="Recent Pull Requests"
            events={pullRequestEvents}/>

        </section>

      </div>  
    );
  }
  
}
export default App;
