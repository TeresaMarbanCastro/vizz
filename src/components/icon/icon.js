import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

const Icon = props => <img src={props.src} className={props.className} alt=""/>

Icon.propTypes = {
	src: PropTypes.string,
	className: PropTypes.string
}

export default Icon;