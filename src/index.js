import React from 'react';
import {render} from 'react-dom';
import App from './app/app';

if (document !== null && document !== undefined) {
  const appContainer = document.getElementById('app');

  if (appContainer) {
    render(<App />, appContainer);
  }
} else {
  /* eslint-disable no-console */
  console.warn('main.js is unable to find application container.');
  console.warn('If you are running production or development app then worry');
  console.warn('If this is components, styleguide or storybook this behavior is expected');
  /* eslint-enable no-console */
}
