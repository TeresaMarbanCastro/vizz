import React from 'react';

const Gradient = props => {
	const colors = props.items.map((item => item.color)).join(',');
	const randomText = 'Culpa nisi adipisicing irure exercitation et velit ea. Ipsum ullamco nostrud aliqua esse dolor deserunt ad incididunt minim quis amet nisi consectetur sunt.'; 
	const url = "https://vizzuality.com";
	return(
		<section className="gradient-container">
			<button className="buttonGradient"
				onClick={props.onClick}
				style={{background: `linear-gradient(to right, ${colors})`}}
				id="button-gradient-id"
				aria-controls="extra-text">
			</button>
			<div className="gradient-titles-container">
			{props.items.filter(item => item.name).map((el,i) => <p key={i}>{el.name}</p>)}
			</div>
			{props.isExtraTextVisible &&
				<div
					role="region"
					id="extra-text"
					aria-live="polite">
					<p>{randomText}</p>
					<a href={url} target="_blank"
					rel="noopener noreferrer"
					>Check the data</a>
				</div>}
		</section>
	)
}

export default Gradient

