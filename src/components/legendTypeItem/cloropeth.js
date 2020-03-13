import React from 'react';
import PropTypes from 'prop-types';


const Cloropeth = props => {
	return (
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

Cloropeth.propTypes = {
	items: PropTypes.array
}

export default Cloropeth;