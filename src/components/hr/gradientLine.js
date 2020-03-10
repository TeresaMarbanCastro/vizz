import React from 'react';

const GradientLine = props => {
	const colors = props.items.map((item => item.color)).join(',');
	return(
		<div className="gradient-container">
			<button className="buttonGradient" style={{background: `linear-gradient(to right, ${colors})`}}></button>
			<div className="gradient-titles-container">
			{props.items.map((el, i) => el.name ? <p>{el.name}</p> : null)}
			</div>
		</div>
	)
}

export default GradientLine