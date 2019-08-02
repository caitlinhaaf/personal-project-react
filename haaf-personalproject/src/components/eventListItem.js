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
    // console.log("List Item Props", props.eventData)

    return (
        <li className={styles.listItem}>
            <a href={props.repoUrl} target="_blank">
                {props.repoName}
            </a>
            <p>Status: {props.pullReqStatus}</p>
        </li>
    );

}



export default EventListItem;
