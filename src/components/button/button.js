import React from 'react';
import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import './button.scss';

const Button = props => {
	return (
		<button 
			onClick={props.onClick}
			data-tooltip={props.dataTooltipText}
			name={props.name}
			className={props.className}>
			<Icon src={props.src} alt={props.alt} />
		</button>
	)};

Button.propTypes = {
	onClick: PropTypes.func,
	dataTooltipText: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string
}
export default Button;