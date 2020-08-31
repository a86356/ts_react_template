import React from 'react';

type Props = {
    label:string
}

const Button:React.FC<Props>=(props:Props) =>{
    const  {label} = props;
    return (
        <div data-testid={'button'}>{label}1</div>
    );
}


export default Button;



