import React from 'react';

const GradientLine = props => {
	if(props.type!=="gradient") return null;
	const colors = props.items.map((item => item.color)).join(',');
	return(
    <button className="buttonGradient" style={{background: `linear-gradient(to right, ${colors})`}}></button>
	)
}

export default GradientLine