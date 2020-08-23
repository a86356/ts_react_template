import {ADD_Action,ADD_NOTE} from "./actionTypes";

export const addNote=(note:string):ADD_Action=>({
    type:ADD_NOTE,
    payload:note
})


