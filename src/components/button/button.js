import React from 'react';
import Icon from '../icon/icon';
import './button.scss';

const Button = props => {
   return (
        <button onClick={props.onClick}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
            aria-expanded={props.isVisible}    
            name={props.name}
            className={props.className}>{props.label}
            <Icon src={props.src} alt={props.alt} />
        </button>
   )};

export default Button;