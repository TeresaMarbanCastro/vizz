import React from 'react';
// import PropTypes from 'prop-types'; // verify prop data types
import './tooltip.scss';
import show from '../../assets/icons/show.svg';
import info from '../../assets/icons/info.svg';
import expand from '../../assets/icons/arrow-down.svg';
import Button from '../button/button';



const Tooltip = () => {
	// const isVisible = show;
	// const info = CardTableInfo; // info coming from props when we get data
	// const toggleVisibility = () => {
	// 	debugger
	// 	return isVisible
	// 		? hide
	// 		: show
	// }
	const isVisible = true;
	const x = (hide, show) => {
		debugger
		return isVisible
		? hide
		: show
	}
	const handleClick = () => {
		return !isVisible
	}
	return (
		<ul className="tooltip-container">
			<li><Button alt="show content" src={show} onClick={handleClick}/></li>
			<li><Button alt="more information" src={info} /></li>
			<li><Button alt="expand" src={expand} /></li>
		</ul>
	)
}

// Tooltip.PropTypes = {
//     alt: PropTypes.string,
//     // src: Proptypes.string
// }

// Tooltip.defaultProps = {
//     alt: ''
// }
export default Tooltip;
