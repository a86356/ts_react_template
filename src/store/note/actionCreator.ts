import {ADD_Action,REMOVE_Action} from "./actionTypes";
import {getData} from '../../apis/api';

export const addNote=(note:any[]):ADD_Action=>({
    type:"ADD_NOTE",
    payload:note
})

export const removeNote=(index:number):REMOVE_Action=>({
    type:"REMOVE_NOTE",
    payload:index
})


//使用redux-thunk可以把异步操作抽取出来
export const getList = (page:number) =>{
    return (dispatch:any)=>{
        getData({
            page:page,
            searchcontent:'',
            service:"segment.getseglist",
        }).then((res:any)=>{
            dispatch(addNote(res.list))
        })
    }
}