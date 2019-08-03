import React from 'react';

import styles from './eventList.module.css'

import EventListItem from './eventListItem'

// PROPS:
// - header 
// - list of data used to generate list items

const EventList = ({header, events}) => {

    return (
        <section>
            <h3>{header}</h3>

            { events.length >= 1 ? (
                <ul className={styles.list}>
                    {
                        events.map( (
                            {repoName, repoUrl, pullReqStatus, forkedFrom}, 
                            index) => (
                                <EventListItem 
                                    key={index}
                                    repoName={repoName}
                                    repoUrl={repoUrl}
                                    pullReqStatus={pullReqStatus}
                                    forkedFrom={forkedFrom}/>
                        ))
                    }
                </ul>
            ) : (
                <p className={styles.note}>
                    No events of this type available.
                </p>
            )
            }
        </section>
    );

}

export default EventList;
