import React, { useState} from 'react';
import Item from './Item'
import store from "../store";

function TodoList() {
    const [val,setVal] = useState<string>(store.getState().inputVal)
    const [list,setList] = useState<string[]>(store.getState().list)

    const handleClick=()=>{
        setList([...list,val])
        setVal('')
    }

    const handleChange=(e:React.FormEvent<HTMLInputElement>)=>{
        setVal(e.currentTarget.value);
    }
    const deleteItem=(index:number)=>{
        const mylist = [...list];
        mylist.splice(index,1);
        setList(mylist)
    }

    const getItems=()=>{
        return  list.map((item,index)=>{
            return (<Item key={index} onClick={deleteItem} index={index} item={item}></Item>)
        })
    }

    return (
        <div className="App">
            <label className="red" htmlFor="inputarea">输入内容</label>
            <input id="inputarea" type="text" value={val} onChange={(e)=>{handleChange(e)}}/>
            <button onClick={()=>{handleClick()}}>提交</button>
            <ul>
                { getItems()}
            </ul>
        </div>
    );
}

export default TodoList;
