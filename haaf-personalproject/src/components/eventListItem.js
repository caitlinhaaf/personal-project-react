import React from 'react';

import styles from './eventListItem.module.css'

// INSTRUCTIONS
// - Each item in the forked repos list should:
//     - Display the name of the repo as a link— when this link is clicked it should take you to that repo in a new tab
//     - Display the name of the repo it was forked from
    
//  - Each item in the pull request list should:
//      - Display the name of the pull request as a link— when this link is clicked it should take you to that pull request in a new tab

//      - Display the current status of the pull request (Open, Merged, Closed). This can be done by colour coding the list item or display the status in words

// PROPS:
// - 

const EventListItem = (props) => {
    
    // define multiple classes based on pull status
    let classes;
    switch( props.pullReqStatus ) {
        case undefined:
            classes = `${styles.listItem}`
            break
        case 'open':
            classes = `${styles.listItem} ${styles.open}`
            break
        case 'closed':
            classes = `${styles.listItem} ${styles.closed}`
            break
    }


    return (
        <li className={classes}>
            <a href={props.repoUrl} target="_blank">
                <b>{props.repoName}</b>
            </a>

            {/* if pullReqStatus provided, display: */}
            <p>Status: {props.pullReqStatus}</p>

        </li>
    );


}



export default EventListItem;
