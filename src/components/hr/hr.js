import React from 'react';
import './hr.scss';

import GradientLine from './gradientLine';
import SingleColorLine from './singleColorLine';
import Basic from './basic';

const Hr = props => {
	const grd = () =>{
		if(props.type==="gradient") return <GradientLine items={props.items} type={props.type}/>
	}
	const c = () =>{
		if(props.type==="choropleth") return<SingleColorLine items={props.items} type={props.type}/>
	}
	const b = () =>{
		if(props.type==="basic") return <Basic items={props.items} type={props.type}/>
	}
		return (
		<div className="hrr">
			{grd()}
			{c()}
			{b()}
		</div>
	)
}
export default Hr
