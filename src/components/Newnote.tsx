import React, {ChangeEvent, useState} from "react";

interface NewnoteProps {
    addNote:(note:string)=>void

}

export const Newnote:React.FC<NewnoteProps> = ({addNote})=>{
    const [note,setNote] = useState('');

    const updateNote =(event:ChangeEvent<HTMLInputElement>)=>{
        setNote(event.target.value)
    }

    const onAddNoteClick = () =>{
        addNote(note)
        setNote("")
    }

    return (
        <div>
            <input
                onChange={updateNote}
                value={note} type="text" name={"note"} placeholder={"note"}/>
            <button onClick={onAddNoteClick}>add note</button>
            <hr/>
        </div>
    )
}