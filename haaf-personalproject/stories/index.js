import React from 'react';
import { storiesOf } from '@storybook/react';

// my storybook addons
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// my components
import Button from '../src/components/button';
import EventList from '../src/components/eventList';
import TextInput from '../src/components/textInput';
import EventListItem from '../src/components/eventListItem';
import Loader from '../src/components/loader';

storiesOf('Button', module)
    .add('default button', () => (
        <Button clickEvt={action('button-click')}>Hello!</Button>
    ))
    .add('disabled button', () => (
        <Button disabled={true}>Hello!</Button>
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

storiesOf('Event List', module)
        .add('empty event list', () =>(
            <EventList header="My Events" events={[]}/>
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

storiesOf('Loader', module)
        .add('active loader', () => (
            <Loader />
        ))


const knobStories = storiesOf('Example Using Knobs', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
knobStories.addDecorator(withKnobs);

knobStories.add('button with knobs', () => (
    <Button disabled={boolean('Disabled', false)}>
        {text('Label', 'Hello Storybook')}
    </Button>
))