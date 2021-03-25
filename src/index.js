import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware,compose, combineReducers } from 'redux';
import thunkMiddleware from "redux-thunk";

import reducer from "./redux/Form/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    login: reducer,
    });

    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunkMiddleware)
    ));


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
