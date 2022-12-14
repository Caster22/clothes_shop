import { combineReducers, createStore } from 'redux';
//import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';


// define reducers
const reducers = {};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
    if (typeof reducers[item] == 'undefined') {
        reducers[item] = (statePart = null) => statePart;
    }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
    combinedReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
