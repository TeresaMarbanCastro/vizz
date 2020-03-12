import React from 'react';

const Cloropeth = props => {
	return(
		<div className="cloropeth-container">
		<button className="buttonGradient">
			{props.items.map((el, i) => <hr style={{color: el.color}} key={i} className="line"></hr>)}
		</button>
		<div className="cloropeth-titles-container">
		{props.items.filter(item => item.name).map((el,i) => <p key={i}>{el.name}</p>)}
	</div>
	</div>
	
	)
}

export default Cloropeth