import React from 'react'
import Toolbar from '../toolbar/toolbar';
import Title from '../title/title';
import Icon from '../icon/icon';
import Hr from '../hr/hr';
import drag from '../../assets/icons/drag-dots.svg';
import info from '../../assets/icons/info.svg';
import hide from '../../assets/icons/hide-eye.svg';
import show from '../../assets/icons/show.svg';
import Button from '../button/button';
import expand from '../../assets/icons/arrow-down.svg';

import './legendItem.scss';

class LegendItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isExpanded: true,
			isVisible: true,
			isInfoOpen: false
		};
	}

	onChangeVisibility = () => {
		console.log(this.state.isVisible)
		this.setState({isVisible: !this.state.isVisible})		
	}

	onChangeInfo = () => {
		console.log(this.parseText);
		this.setState({isInfoOpen: !this.state.isInfoOpen})
	}
	onChangeCollapse = () => {
		console.log(this.state.isExpanded);
		this.setState({isExpanded: !this.state.isExpanded})
	}

	parseText = this.props.description.replace(/<[^>]*>/gm, '');

	render() {
	return(
		<section>
			<header>
			<Icon src={drag}/>
			<Title title={this.props.name}/>

			<Toolbar>
				<li><Button
					src={this.state.isVisible ? show : hide}
					name={this.state.isVisible ? 'Show layer' : 'Hide layer'}
					onClick={this.onChangeVisibility}
					onMouseOver={this.onMouseOver}
					/>
					{/* <Tooltip 
					title={this.state.isVisible ? 'Show layer' : 'Hide layer'}
					isHover={this.state.isHover}/> */}
				</li>

				<li><Button
						name="Layer info" 
						src={info}
						onClick={this.onChangeInfo}
						title="more info"
						/>
						{/* <Tooltip isHover={this.state.isHover}/> */}
				</li> 

			<li><Button 
					src={expand}
					onClick={this.onChangeCollapse}
					name={this.state.isExpanded ? 'Collapse layer' : 'Expand layer'}
					ariaExpanded={this.state.isExpanded}
					className={this.state.isExpanded ? 'rotate-up-right-down' : 'rotate-down-right-up'}
					/>
					{/* <Tooltip isHover={this.state.isHover} isLegendItemVisible={this.state.isLegendItemVisible} */}
			</li>
			</Toolbar>
			{/* /<Toolbar description={this.props.description} */}
			</header>
			{this.state.isExpanded
			? <Hr type={this.props.type} items={this.props.items} />
			: ''}
		</section>
	)
}
}

export default LegendItem