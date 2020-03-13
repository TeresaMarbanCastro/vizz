import React from 'react';
import Proptypes from 'prop-types';
import './title.scss';

const Title = props => <h2>{props.title}</h2>

Title.propTypes = {
	title: Proptypes.string
}
export default Title;