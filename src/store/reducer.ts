import {ModifyAction} from "./actions";


const defaultState = {
    inputVal:'2324',
    list:["a","b"]
};

export default (state=defaultState,action:ModifyAction)=>{

    switch (action.type){
        case "CHANGE_VALUE":
            let newState = JSON.parse(JSON.stringify(state));
            newState.inputVal = state.inputVal

            return newState
    }

    return state;
}