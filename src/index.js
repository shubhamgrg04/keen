import ReactDOM from 'react-dom';
import React from 'react';
import './css/bootstrap.min.css';
import './css/index.css';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import MainApp from './components/MainApp.js';

const initialState = {
    portfolio: {
        isFirstLoad: true
    },
    allStocks: {
        isFirstLoad: true
    }
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(allReducers, initialState,  middleware);

ReactDOM.render(
    <Provider store={store}>
        <MainApp />
    </Provider>
    , document.getElementById('root'));
