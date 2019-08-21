import { configure } from '@storybook/react';
import '../src/App.css';
import '../src/index.css'

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);