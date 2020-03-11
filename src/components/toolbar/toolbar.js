import React from 'react';
// import PropTypes from 'prop-types'; // verify prop data types
import './toolbar.scss';
import info from '../../assets/icons/info.svg';
import hide from '../../assets/icons/hide-eye.svg';
import show from '../../assets/icons/show.svg';
import expand from '../../assets/icons/arrow-down.svg';
import Button from '../button/button';

class Toolbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isVisible: false,
			isExpanded: true,
		};
	}
	handleClick = () => {
		console.log(this.state.isVisible)
		this.setState({isVisible: !this.state.isVisible})		
	}
	handleExpand = () => {
		console.log(this.state.isExpanded);
		this.setState({isExpanded: !this.state.isExpanded})
	}
	handleModal = () => {
		return (
			<div>hola</div>
		)
	}
	// des = props.description.replace(/<[^>]*>/gm, '');

	render(){
		return (
			<ul className="toolbar">
				<li><Button
					src={this.state.isVisible ? show : hide} 
					onClick={this.handleClick}/>
					<div>{this.state.isVisible ? 'Show layer' : 'Hide layer'}</div>
				</li>
				<li><Button
					name="layer info" 
					src={info}
					onClick={this.handleModal} />
				</li>
				<li><Button 
					src={expand}
					onClick={this.handleExpand}
					aria-expanded={this.state.isExpanded}
					className={this.state.isExpanded ? 'rotate-down-right-up' : 'rotate-up-right-down'}/>
					</li>
			</ul>
		)
	}
}
export default Toolbar;
