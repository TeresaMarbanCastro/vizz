import React from 'react';
import './button.scss';

function Button (props) { 
    return (
        <button onClick={props.onClick} name={props.name}>{props.label}
            <img src={props.src} alt={props.alt} />
        </button>
    )
};

export default Button;