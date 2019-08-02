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
import {repos} from './testresults-repos'
import {users} from './testresults-users'


class App extends React.Component {

  render(){

    const pullRequestEvents = events.filter( event => (
      event.type === "PullRequestEvent"
    ))


    return (
      <div>
        <SearchForm />
  
        <section className="searchResults">
          <h2>User ID</h2>
  
          {/* <EventList 
            header="Recent Forks"
            events={events}/> */}
  
          <EventList 
            header="Recent Pull Requests"
            events={pullRequestEvents}/>
        </section>
        
  
      </div>
    );
  }
  
}
export default App;
