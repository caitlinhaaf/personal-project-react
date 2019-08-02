import React from 'react';

import styles from './eventList.module.css'

import EventListItem from './eventListItem'

// INSTRUCTIONS
// - Each item in the forked repos list should:
//     - Display the name of the repo as a link— when this link is clicked it should take you to that repo in a new tab
//     - Display the name of the repo it was forked from
    

//  - Each item in the pull request list should:
//      - Display the name of the pull request as a link— when this link is clicked it should take you to that pull request in a new tab

//      - Display the current status of the pull request (Open, Merged, Closed). This can be done by colour coding the list item or display the status in words


// PROPS:
// - header 
// - list of data used to generate list items

class EventList extends React.Component {
    
// constructor(props) {
//     super(props);
//   }

    render() {
        console.log("EVENT LIST PROPS", this.props.events)
        return (
            <section>
                <h3>{this.props.header}</h3>
                <ul className={styles.list}>
                    {
                        this.props.events.map( (event) => (
                            // <EventListItem 
                            //     repoName={event.repo.name}
                            //     repoUrl={event.repo.url}/>
                            <EventListItem 
                                repoName={event.payload.pull_request.title}
                                repoUrl={event.payload.pull_request.url}
                                pullReqStatus={event.payload.pull_request.state}/>
                        ))
                    }
                </ul>
            </section>
        );
    }

}

export default EventList;
