import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import rootReducer from './rootReducer';
import actions from './products/thunks';

it('App can start app without crashing', () => {
    const rootDiv = document.createElement('div');

    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk),
    ));
    store.dispatch(actions.fetchProducts());

    ReactDOM.render(<Provider store={store}><App /></Provider>, rootDiv);
});