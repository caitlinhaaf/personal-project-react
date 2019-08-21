import React from 'react';
import { storiesOf } from '@storybook/react';

// my components
import Button from '../src/components/button';
import EventList from '../src/components/eventList';
import TextInput from '../src/components/textInput';
import EventListItem from '../src/components/eventListItem';


storiesOf('Button', module)
    .add('default button', () => (
        <Button>Hello!</Button>
    ))
    .add('disabled button', () => (
        <Button disabled={true}>Hello</Button>
    ))

storiesOf('Text Input', module)
    .add('default text input', () => (
        <TextInput />
    ))
    .add('text input with error', () => (
        <TextInput 
            hasError={true}
            errorMsg="This is where your error message will appear."/>
    ))

storiesOf('Event List Item', module)
        .add('fork event list item', () => (
            <EventListItem 
                repoName="Repository Name"
                repoUrl="http://www.github.com">
                    <p>Forked From: forked github repository name</p>
            </EventListItem>
        ))
        .add('open PR event list item', () => (
            <EventListItem
                repoName="Repository Name"
                repoUrl="http://www.github.com"
                statusClass="open">
                <p>Status: Open</p>
            </EventListItem>
        ))
        .add('close PR event list item', () => (
            <EventListItem
                repoName="Repository Name"
                repoUrl="http://www.github.com"
                statusClass="closed">
                <p>Status: Closed</p>
            </EventListItem>
        ))