import React from 'react';

import styles from './eventList.module.css'

import EventListItem from './eventListItem'


const EventList = ({header, events}) => {
    return (
        <section>
            <h3>{header}</h3>

            { events.length >= 1 ? (
                <ul className={styles.list}>
                    {
                        events.map( ({repoName, repoUrl, pullReqStatus, forkedFrom, id}) => (
                                <EventListItem 
                                    key={id}
                                    repoName={repoName}
                                    repoUrl={repoUrl}
                                    statusClass={pullReqStatus}>
                                        <p>
                                            { ( pullReqStatus && `Status: ${pullReqStatus}`) }
                                            { ( forkedFrom && `Forked From: ${forkedFrom}`) }
                                        </p>
                                </EventListItem>
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
