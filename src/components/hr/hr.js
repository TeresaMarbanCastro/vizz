import React from 'react';
import './hr.scss';

import GradientLine from './gradientLine';
import SingleColorLine from './singleColorLine';
import Basic from './basic';

class Hr extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isTextVisible: false
		};
	}

	handleClick= () => {
		this.setState({isTextVisible: !this.state.isTextVisible})		
	}
	grd = () =>{
		if(this.props.type==="gradient") return <GradientLine isTextVisible={this.state.isTextVisible} onClick={this.handleClick} items={this.props.items} type={this.props.type} description={this.props.description}/>
	}
	c = () =>{
		if(this.props.type==="choropleth") return<SingleColorLine items={this.props.items} type={this.props.type}/>
	}
	b = () =>{
		if(this.props.type==="basic") return <Basic items={this.props.items} type={this.props.type}/>
	}
	
	render(){
		return (
			<div className="hrr">
				{this.grd()}
				{this.c()}
				{this.b()}
			</div>
		)
	}
}
export default Hr
