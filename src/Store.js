import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import root from './reducers';

const middleware = applyMiddleware(thunk, promise);

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const Store = createStore(
    root,
    composeEnhancers(middleware)
);

export default Store;