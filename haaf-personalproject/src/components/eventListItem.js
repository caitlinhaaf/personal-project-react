import React from 'react';

import styles from './eventListItem.module.css'


const EventListItem = ({pullReqStatus, repoName, repoUrl, forkedFrom}) => {
    // define multiple classes based on pull status, if defined
    let classes;
    switch( pullReqStatus ) {
        case 'open':
            classes = `${styles.listItem} ${styles.open}`
            break
        case 'closed':
            classes = `${styles.listItem} ${styles.closed}`
            break
        default :
            classes = `${styles.listItem}`
    }


    return (
        <li className={classes}>
            <a href={repoUrl} 
                target="_blank"
                rel="noopener noreferrer" >
                <b>{repoName}</b>
            </a>
            {
                pullReqStatus !== undefined &&
                <p>Status: {pullReqStatus}</p>
            }

            {
                forkedFrom !== undefined &&
                <p>Forked from: {forkedFrom}</p>
            }
        </li>
    );

}



export default EventListItem;
