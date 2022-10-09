import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

// Initiate app
Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});