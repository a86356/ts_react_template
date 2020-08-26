import React, {useContext, useReducer} from 'react'



const myContext =React.createContext(0)

interface Action {
    type:string,
    payload:number
}

const reducer = (state:any,action:Action)=>{
    if(action.type=='increment'){
        return {count:state.count+1}
    }
    if(action.type=='decrement'){
        return {count:state.count-1}
    }
}

const ContextProvider = (props:any) =>{
    const [state,dispatch] = useReducer(reducer,{count:0});

}
export default ContextProvider;