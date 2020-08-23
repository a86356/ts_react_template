import {createStore} from "redux";
import {noteReducer} from "./note/reducer";


const store = createStore(
    noteReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;