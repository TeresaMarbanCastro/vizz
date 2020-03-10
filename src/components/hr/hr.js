import React from 'react';
import './hr.scss';

import GradientLine from './gradientLine';
import SingleColorLine from './singleColorLine';

const Hr = props => {
	return (
		<div>
			<GradientLine items={props.items} type={props.type}/>
			<SingleColorLine items={props.items}  type={props.type}/>
		{props.items.map((el, i) => el.name ? <p className="line-title">{el.name}</p> : '')}
		</div>
	)
}
export default Hr