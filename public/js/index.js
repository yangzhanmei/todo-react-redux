import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Index from './reducers/Index';
import App from './containers/App';

let store = createStore(Index);

render(<Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);