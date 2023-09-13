import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import UserReducer from './features/user';
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        user: UserReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

