import React from 'react';

const GradientLine = props => {
	const colors = props.items.map((item => item.color)).join(',');
	const des = props.description.replace(/<[^>]*>/gm, '');
	
	return(
		<div className="gradient-container">
			<button className="buttonGradient" onClick={props.onClick} style={{background: `linear-gradient(to right, ${colors})`}}></button>
			<div className="gradient-titles-container">
			{props.items.map((el, i) => el.name ? <p key={i}>{el.name}</p> : null)}
			</div>

				{props.isTextVisible ?
					<div className="animated-text">
					<p>{des}</p>
					<a>Check the data</a>
					</div> : ''}

		</div>
	)
}

export default GradientLine

