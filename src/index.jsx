// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import channelReducer from './reducers/channel_reducer';
import selectChannelReducer from './reducers/select_channel_reducer';
import setMessages from './reducers/message_list_reducer';
import setUser from './reducers/current_user_reducer';
import '../assets/stylesheets/application.scss';

// initial state
const initialState = {
  channelList: [ 'general', 'react', 'paris' ],
  messageList: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  selectedChannel: 'general',
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`
};
// prompt("What is your username?") ||

// State and reducers
const reducers = combineReducers({
  channelList: channelReducer,
  messageList: setMessages,
  selectedChannel: selectChannelReducer,
  currentUser: setUser
});

// apply all the middlewares needed
const middlewares = applyMiddleware(reduxPromise, logger);


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
