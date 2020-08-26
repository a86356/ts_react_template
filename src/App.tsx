import React  from 'react';
import '@/style/reset.css'
import '@/style/common.scss'

import TodoList from "./components/TodoList";

import {BrowserRouter,Switch,Route} from "react-router-dom";

import A from './components/a'
import B from './components/b'

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={A} />
                <Route exact path={'/b'} component={B} />
            </Switch>
        </BrowserRouter>

    );
}

export default App;
