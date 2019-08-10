import React from 'react'
import testRenderer from 'react-test-renderer'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import EventListItem from '../components/eventListItem'

describe('event list item component', () => {

    it('renders a forked event list item', () => {
        const listItem = testRenderer.create(
            <EventListItem 
                repoName="Repository Name" 
                repoUrl="github.com"
                forkedFrom="Forked Repo Name"/>
        )
        expect(listItem.toJSON().props.className).toStrictEqual("listItem")
    })


    it('renders an open pull request list item', () => {
        const listItem = testRenderer.create(
            <EventListItem 
                repoName="Repository Name" 
                repoUrl="github.com"
                statusClass="open"/>
        )
        expect(listItem.toJSON().props.className).toStrictEqual("listItem open")
    })


    it('renders a closed pull request list item', () => {
        const listItem = testRenderer.create(
            <EventListItem 
                repoName="Repository Name" 
                repoUrl="github.com"
                statusClass="closed"/>
        )
        expect(listItem.toJSON().props.className).toStrictEqual("listItem closed")
    })

  })

