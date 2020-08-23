import React from 'react';

import {Newnote} from "./Newnote";
import {useDispatch, useSelector} from "react-redux";
import {INoteState} from "../store/note/reducer";
import {addNote,removeNote} from "../store/note/actionCreator";

function Reduxdemo(){
    const notes = useSelector<INoteState,INoteState['notes']>(state=>state.notes)
    const dispatch = useDispatch();
    const addNoteClick = (note:string) =>{
        dispatch(addNote(note))
    }

    const removeNoteClick= (index:number)=>{
        dispatch(removeNote(index))
    }

    return (
        <div>
            <Newnote addNote={addNoteClick}/>
            <ul>
                {notes.map((item,index)=>{
                    return (
                        <li key={item} onClick={()=>{removeNoteClick(index)}}>{item}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Reduxdemo;