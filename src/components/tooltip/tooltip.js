import React from 'react';
// import PropTypes from 'prop-types'; // verify prop data types
import './tooltip.scss';
import info from '../../assets/icons/info.svg';
import hide from '../../assets/icons/hide-eye.svg';
import show from '../../assets/icons/show.svg';
import expand from '../../assets/icons/arrow-down.svg';
import Button from '../button/button';

class Tooltip extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false
		};
	}
	handleClick = () => {
		console.log(this.state.isVisible)
		this.setState({isVisible: !this.state.isVisible})		
	}
	render(){
	return (
		<ul className="tooltip-container">
			<li><Button alt="show content" src={this.state.isVisible ? show : hide} onClick={this.handleClick}/><div>{this.state.isVisible ? 'Show layer' : 'Hide layer'}</div></li>
			<li><Button alt="more information" src={info} /></li>
			<li><Button alt="expand" src={expand} /></li>
		</ul>
	)
}
}
// Tooltip.PropTypes = {
//     alt: PropTypes.string,
//     // src: Proptypes.string
// }

// Tooltip.defaultProps = {
//     alt: ''
// }
export default Tooltip;
