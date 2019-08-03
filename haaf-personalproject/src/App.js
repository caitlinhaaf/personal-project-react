import React from 'react';
import './App.css'

// COMPONENTS
import SearchForm from './components/searchForm'

import EventList from './components/eventList'

// INSTRUCTIONS
// When user information has been returned, hide the form and display the github username with two lists:
//   - The most recent repositories (repos) forked by the username provided
//   - their most recent pull requests.

// STATE VALUES
// - search visible
// - loading error
// - results visible
// - current user ID

// USING TEST API DATA
import {events} from './testresults-events'

class App extends React.Component {

  render(){

    const pullRequestEvents = events.filter( event => (
      event.type === "PullRequestEvent"
    )).reduce( (accumulator, event) => {
      accumulator=[...accumulator, {
        id: event.id,
        repoName: event.payload.pull_request.title,
        repoUrl: event.payload.pull_request.html_url,
        pullReqStatus: event.payload.pull_request.state
      }]
      return accumulator
    }, [])

    const forkEvents = events.filter( event => (
      event.type === "ForkEvent"
    )).reduce( (accumulator, event) => {      
      accumulator=[...accumulator, {
        id: event.id,
        repoName: event.payload.forkee.full_name,
        repoUrl: event.payload.forkee.html_url,
        forkedFrom: event.repo.name
      }]
      return accumulator
    }, [])


    return (
      <div>

        {/* if state search visible, display search form... */}
        <SearchForm />
  
        {/* else if state search visible is false, display result data... */}
        <section className="searchResults">
          <h2>User ID</h2>
  
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
