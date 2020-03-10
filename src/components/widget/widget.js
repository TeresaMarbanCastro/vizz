import React from 'react'
import Tooltip from '../tooltip/tooltip';
import Title from '../title/title';
import Hr from '../hr/hr';

import Button from '../button/button';
import drag from '../../assets/icons/drag-dots.svg';

import './widget.scss';


const Widget = props => {
		return(
			<>
			<header>
			<Button alt="show content" src={drag} onClick={() => console.log('d')}/>
			<Title title={props.name}/>
			<Tooltip />
			</header>
			<Hr type={props.type} items={props.items} description={props.description} />
			</>
		)
}

export default Widget