import React, {useState} from 'react';

type IProps ={
    index:number,
    item:string,
    onClick:(num:number)=>void
}

const Item:React.FC<IProps>=(props) =>{
    const {index,item,onClick} = props
    return (
        <li className="abc" key={index} onClick={()=>{onClick(index)}}>
            <span>{item}</span>
        </li>
    );
}
Item.defaultProps={
    index:1
}

export default Item;



