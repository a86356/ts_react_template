import {AllActions} from "./actionTypes";

export interface IMsgState {notes:string[]}
const initialState = {
    notes:[]
}

export const msgReducer = (state:IMsgState=initialState,action:AllActions) =>{
    switch (action.type){
        case "ADD_NOTE":{
            return {...state,notes:[...state.notes,action.payload]}
        }
        default:
            return state
    }
}
