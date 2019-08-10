import React from 'react'
import testRenderer from 'react-test-renderer'

import EventList from '../components/eventList'

const testEvents = [
    {id: "10181816632", repoName: "Ensure the trimmed duration is at least 0.1 seconds", repoUrl: "https://github.com/sindresorhus/Gifski/pull/120", pullReqStatus: "open"},
    {id: "10177616026", repoName: "Ensure plugin descriptions wrap", repoUrl: "https://github.com/wulkano/kap/pull/703", pullReqStatus: "closed"},
    {id: "10176972847", repoName: "Upgrade dependencies", repoUrl: "https://github.com/wulkano/kap/pull/699", pullReqStatus: "closed"}
]

describe('event list item component', () => {

    it('renders a list with header', () => {
        const list = testRenderer.create(
            <EventList 
                header="List Header" 
                events={testEvents}/>
        )
        expect(list.toJSON().children[0].children).toStrictEqual(["List Header"])
        expect(list.toJSON().children[1].children.length).toStrictEqual(testEvents.length)
    })

    it('renders notification that no events were returned', () => {
        const list = testRenderer.create(
            <EventList 
                header="List Header" 
                events={[]}/>
        )
        expect(list.toJSON().children[0].children).toStrictEqual(["List Header"])
        expect(list.toJSON().children[1].children).toStrictEqual(["No events of this type available."])
    })

  })