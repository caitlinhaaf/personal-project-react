import React from 'react'
import testRenderer from 'react-test-renderer'

import Button from '../components/button'
import EventList from '../components/eventList'
import EventListItem from '../components/eventListItem'


describe('button component', () => {
    it('renders an enabled button', () => {
      const button = testRenderer.create(
        <Button buttonTxt="GET USER" 
                clickEvt={() => console.log("button clicked")}
                />
        )
      expect(button.toJSON().children).toStrictEqual(["GET USER"])
      expect(button.toJSON().props.className).toStrictEqual("button")
    })

    it('renders an disabled button', () => {
        const button = testRenderer.create(
          <Button buttonTxt="GET USER"
                  disabled={true}/>
          )
        expect(button.toJSON().props.className).toStrictEqual("button disabled")
      })
  })


describe('event list item component', () => {

it('renders a forked event list item', () => {
    const listItem = testRenderer.create(
        <EventListItem repoName="Repository Name" 
                        repoUrl="github.com"
                        forkedFrom="Forked Repo Name"/>
    )
    // console.log(listItem.toJSON().children)
    expect(listItem.toJSON().props.className).toStrictEqual("listItem")
    // expect(listItem.toJSON().children).toBe([

    // ])
})


    // it('renders an open pull request list item', () => {

    // })


    // it('renders a closed pull request list item', () => {

    // })

  })

