import React from 'react';
import PropTypes from 'prop-types';

const Basic = props => {
	return (
		<div className="basic-container">
			<div className="basic-buttons-container">
				{props.items.map((el, i) => <button key={i} className="basic-buttons" style={{background: el.color}}></button>)}
			</div>
			<div className="basic-titles-container">
				{props.items.filter(item => item.name).map((el,i) => <p key={i}>{el.name}</p>)}
			</div>
		</div>
	)
}

Basic.propTypes = {
	items: PropTypes.array
}
export default Basic;