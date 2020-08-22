import React, {useState} from 'react';
type IProps ={
    index:number,
    item:string,
    onClick:(num:number)=>void
}

const Item:React.FC<IProps>=(props) =>{
    const {index,item,onClick} = props
    return (
        <li className="red" key={index} onClick={()=>{onClick(index)}}>{item}</li>
    );
}
Item.defaultProps={
    index:1
}

export default Item;



