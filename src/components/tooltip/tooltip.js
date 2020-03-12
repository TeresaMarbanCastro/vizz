import React from 'react';

const Tooltip = props => {
    return (
        <>
        {props.isHover ? 
        <div className="tooltip-container">
            <div className="tooltip-arrow" />
            <div className="tooltip-label"><p>{props.title}</p></div>
        </div>
        : ''}
        </>
    )
}

export default Tooltip;