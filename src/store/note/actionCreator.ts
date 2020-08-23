import {ADD_Action,REMOVE_Action} from "./actionTypes";

export const addNote=(note:string):ADD_Action=>({
    type:"ADD_NOTE",
    payload:note
})


export const removeNote=(index:number):REMOVE_Action=>({
    type:"REMOVE_NOTE",
    payload:index
})
