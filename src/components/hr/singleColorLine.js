import React from 'react';

const SingleColorLine = props => {
	return(
		<div className="cloropeth-container">
		<button className="buttonGradient">
			{props.items.map((el, i) => <hr style={{color: el.color}} key={i} className="line"></hr>)}
		</button>
		<div className="cloropeth-titles-container">
		{props.items.map((el, i) => el.name ? <p>{el.name}</p> : null)}
	</div>
	</div>
	
	)
}

export default SingleColorLine