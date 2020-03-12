import React from 'react';
import Icon from '../icon/icon';
import './button.scss';

const Button = props => {
   return (
        <button 
            onClick={props.onClick}
            data-tooltip={props.dataTooltipText}
            name={props.name}
            className={props.className}>
            <Icon src={props.src} alt={props.alt} />
        </button>
   )};

export default Button;