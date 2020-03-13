import React from 'react';
import PropTypes from 'prop-types';
import './toolbar.scss';

const Toolbar = props => <ul className={props.className}>{props.children}</ul>

Toolbar.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any
}
export default Toolbar;
