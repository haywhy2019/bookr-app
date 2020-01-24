import React from 'react';
import btn from '../buttons/button.module.css';

const Button = (props) => {
    return (
    <button type={props.type} className={btn[props.className]}>
        {props.name}
    </button>
    )
}

export default Button;