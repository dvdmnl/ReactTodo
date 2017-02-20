import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions'
var store = require('configureStore').configure();
import firebase from './firebase/'
import router from './router/'

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(actions.login(user.uid))
        hashHistory.push('/todos');
    } else {
        store.dispatch(actions.logout())
        hashHistory.push('/');
    }
})

store.dispatch(actions.startAddTodos())

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
      {router}
  </Provider>,
  document.getElementById('app')
);
