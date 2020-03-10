import React from 'react';

const SingleColorLine = props => {
	if(props.type!=="choropleth") return null;
	return( 
		<button className="buttonGradient">
			{props.items.map((el, i) => <hr style={{color: el.color}} key={i} className="line"></hr>)}
		</button>
	)
}

export default SingleColorLine