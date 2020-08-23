import React  from 'react';
import '@/style/reset.css'
import '@/style/common.scss'

import TodoList from "./components/TodoList";

function App() {

    return (
        <div className="App">
           <TodoList/>
        </div>
    );
}

export default App;
