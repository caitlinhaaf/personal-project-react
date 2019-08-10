import React from 'react';

import styles from './eventListItem.module.css'

const EventListItem = ({repoName, repoUrl, statusClass, ...rest}) => {
    let classes;
    switch( statusClass ) {
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
            {rest.children}
        </li>
    );

}



export default EventListItem;
