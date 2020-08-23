import {createStore,combineReducers,applyMiddleware} from "redux";
import {noteReducer} from "./note/reducer";
import {msgReducer} from "./msg/reducer";
import {composeWithDevTools} from "redux-devtools-extension/index";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    noteReducer,
    msgReducer,
})

const store = createStore(
    noteReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;