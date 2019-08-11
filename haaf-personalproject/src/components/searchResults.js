import React from 'react';

import styles from './searchResults.module.css'

import Button from './button'
import EventList from './eventList'

import {isPullReqType, isForkType} from '../utils/dataTransform.utils'

const SearchResults =({header, events, btnEvent, ...rest}) => {
    const pullReqEvents = 
        (events)
        ?
        events.filter( event => (
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
            (events)
            ?
            events.filter(event => (
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
            clickEvt={btnEvent}>
            &larr; Back to Search
        </Button>

        <h1 className={styles.header}>{header}</h1>

        <EventList 
            header="Recent Forks"
            events={forkEvents}/>

        <EventList 
            header="Recent Pull Requests"
            events={pullReqEvents}/>
    </div>
  );
}

export default SearchResults;
