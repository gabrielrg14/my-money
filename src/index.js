import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals';

import AuthOrApp from './main/AuthOrApp'
import reducers from './main/reducers'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, reduxDevTools)

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>,
    document.getElementById('app')
);

reportWebVitals();
