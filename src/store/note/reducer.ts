import {AllActions,ADD_NOTE,REMOVE_NOTE} from "./actionTypes";

export interface INoteState {notes:any[]}
const initialState = {
    notes:[]
}

export const noteReducer = (state:INoteState=initialState,action:AllActions) =>{
    switch (action.type){
        case ADD_NOTE:{

           return  {...state,notes:[...state.notes,...action.payload]}
        }
        case REMOVE_NOTE:{
            let note =[...state.notes];
            note.splice(action.payload,1)
            return {...state,notes: note}
        }
        default:
            return state
    }
}
