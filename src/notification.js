import { notice, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';

defaults.delay = 1800;

function notification() {
  notice({
    text: 'Too many matches found. Please enter a more specific query',
  });
}

function errorMessage() {
  error({
    text: 'Cannot find that country',
  });
}
export { notification, errorMessage };
