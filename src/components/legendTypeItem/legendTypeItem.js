import React from 'react';
import './legendTypeItem.scss';
import PropTypes from 'prop-types';
import Gradient from './gradient';
import Cloropeth from './cloropeth';
import Basic from './basic';

class LegendTypeItem extends React.Component {
	constructor() {
		super();
		this.state = {
			isExtraTextVisible: false,
		};
	}

	handleClick = () => {
		this.setState({isExtraTextVisible: !this.state.isExtraTextVisible})		
	}
	
	render() {
		return (
			<>
				{this.props.type === "gradient" &&
					<Gradient isExtraTextVisible={this.state.isExtraTextVisible} onClick={this.handleClick} items={this.props.items} type={this.props.type} description={this.props.description}/>
				}
				{this.props.type === "choropleth" &&
					<Cloropeth items={this.props.items} type={this.props.type}/>
				}
				{this.props.type === "basic" &&
					<Basic items={this.props.items} type={this.props.type}/>
				}
			</>
		)
	}
}

LegendTypeItem.propTypes = { 
	type: PropTypes.string
}
export default LegendTypeItem;
