import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {routeConfig} from './router'
import { Router } from 'react-router'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root')
);


