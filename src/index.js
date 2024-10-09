import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor } from './store/store'; // Ensure the correct path for your store
import App from './App';
import { Toaster } from 'react-hot-toast'; // Correct import of Toaster
import './index.css';

ReactDOM.render( <
        Provider store = { store } >
        <
        PersistGate loading = { < div > Loading... < /div>} persistor={persistor}> <
            Toaster / > { /* Correct placement of Toaster */ } <
            App / >
            <
            /PersistGate> < /
            Provider > ,
            document.getElementById('root')
        );