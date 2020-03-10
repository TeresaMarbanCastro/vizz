import React from 'react';


const Basic = props => {
	return(
		<div className="basic-container">
			<div className="basic-buttons-container">
			{props.items.map((el, i) => <button className="basic" style={{background: el.color}}></button>)}
			</div>
			<div className="basic-titles-container">
		{props.items.map((el, i) => el.name ? <p>{el.name}</p> : null)}
		</div>
		</div>
		
	)
}

export default Basic