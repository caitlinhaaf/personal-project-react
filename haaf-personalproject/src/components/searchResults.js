import React from 'react';
import { connect } from "react-redux";

import styles from './searchResults.module.css'

import Button from './button'
import EventList from './eventList'

import { setNewSearch } from '../utils/actions'
import {isPullReqType, isForkType} from '../utils/dataTransform.utils'

const SearchResults =(props) => {
    const pullReqEvents = 
        (props.events)
        ?
        props.events.filter( event => (
        isPullReqType(event.type)
        )).map( event => (
        {
            id: event.id,
            repoName: event.payload.pull_request.title,
            repoUrl: event.payload.pull_request.html_url,
            pullReqStatus: event.payload.pull_request.state
        }
        ))
        : []

        const forkEvents = 
            (props.events)
            ?
            props.events.filter(event => (
            isForkType(event.type)
            )).map(event => (      
            {
                id: event.id,
                repoName: event.payload.forkee.full_name,
                repoUrl: event.payload.forkee.html_url,
                forkedFrom: event.repo.name
            }
            ))
         : []

  return (
    <div className={styles.results}>
        <Button 
            clickEvt={props.setNewSearch}>
            &larr; Back to Search
        </Button>

        <h1 className={styles.header}>{props.searchID}</h1>

        <EventList 
            header="Recent Forks"
            events={forkEvents}/>

        <EventList 
            header="Recent Pull Requests"
            events={pullReqEvents}/>
    </div>
  );
}

const mapStateToProps = state => (
    {
      events: state.search.events,
      searchID: state.search.searchID, 
    }
  )
  
  const mapDispatchToProps = {
    setNewSearch
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchResults);