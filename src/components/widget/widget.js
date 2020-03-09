import React from 'react'
import Tooltip from '../tooltip/tooltip';
import Title from '../title/title';
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
			<div className="d">{props.items.map((el) => <hr style={{color: el.color}} key={el.id} className="line"></hr>)}</div>
			</>
		)
}

export default Widget