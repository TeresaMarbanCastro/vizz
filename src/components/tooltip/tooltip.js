import React from 'react';
// import PropTypes from 'prop-types'; // verify prop data types
import './tooltip.scss';
import info from '../../assets/icons/info.svg';
import hide from '../../assets/icons/hide-eye.svg';
import show from '../../assets/icons/show.svg';
import expand from '../../assets/icons/arrow-down.svg';
import Button from '../button/button';




const Tooltip = () => {
	let isVisible = true;
	let x = isVisible ? show : hide;
	const handleClick = () => {
		console.log(isVisible)
		return !isVisible
	}
	return (
		<ul className="tooltip-container">
			<li><Button alt="show content" src={x} onClick={handleClick}/></li>
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
