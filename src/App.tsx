import React  from 'react';
import '@/style/reset.css'
import '@/style/common.scss'
import Login from './pages/login/login'

import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
