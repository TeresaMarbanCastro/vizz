import React from 'react'
import Toolbar from '../toolbar/toolbar';
import Title from '../title/title';
import Icon from '../icon/icon';
import Hr from '../hr/hr';
import drag from '../../assets/icons/drag-dots.svg';

import './legendItem.scss';

const LegendItem = props => {
	return(
		<section>
			<header>
			<Icon src={drag}/>
			<Title title={props.name}/>
			<Toolbar description={props.description}/>
			</header>
			<Hr type={props.type} items={props.items} />
		</section>
	)
}

export default LegendItem