import {AllActions} from "./actionTypes";

export interface INoteState {notes:string[]}
const initialState = {
    notes:[]
}

export const noteReducer = (state:INoteState=initialState,action:AllActions) =>{
    switch (action.type){
        case "ADD_NOTE":{
            return {...state,notes:[...state.notes,action.payload]}
        }
        case "REMOVE_NOTE":{
            let note =[...state.notes];
            console.log(action)
            note.splice(action.payload,1)
            return {...state,notes: note}
        }
        default:
            return state
    }
}
