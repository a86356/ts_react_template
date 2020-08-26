import React, {useEffect, useReducer,useContext} from 'react';

import {Newnote} from "./Newnote";
import {useDispatch, useSelector} from "react-redux";
import {INoteState} from "../store/note/reducer";
import {addNote,removeNote} from "../store/note/actionCreator";
import {getData} from "../apis/api";
import {getList} from "../store/note/actionCreator";

interface Action {
    type:string,
    payload:number
}
const reducer = (state:any,action:Action)=>{
    if(action.type=='increment'){
        state=state+action.payload
    }
    if(action.type=='decrement') {
        state = state - action.payload
    }
    return state;
}

function Reduxdemo(){
    const notes = useSelector<INoteState,INoteState['notes']>(state=>state.notes)

    const [counter,dispatcher] =  useReducer(reducer,0);

    const dispatch = useDispatch();
    const addNoteClick = (note:string) =>{
        dispatch(addNote([note]))
    }

    const removeNoteClick= (index:number)=>{
        dispatch(removeNote(index))
    }

    useEffect(()=>{
        dispatch(getList(1))
    },[])

    return (
        <div>
            <Newnote addNote={addNoteClick}/>
            <ul>
                {notes.map((item,index)=>{
                    return (
                        <li key={index} onClick={()=>{removeNoteClick(index)}}>{item.id}</li>
                    )
                })}
            </ul>
            <div>{counter}</div>
            <button onClick={()=>{dispatcher({type:"increment",payload:1})}}> increment</button>
            <button onClick={()=>{dispatcher({type:"decrement",payload:1})}}> decrement</button>
        </div>
    );
}

export default Reduxdemo;