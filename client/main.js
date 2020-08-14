import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import Layout from './pages/Layout';

const store = createStore(rootReducer);

ReactDOM.render(<Router basename={'/'}>
    <Provider store={store}>
        <Layout />
    </Provider>
</Router>, document.getElementById('mount-point'));