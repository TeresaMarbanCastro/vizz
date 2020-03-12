import React from 'react'
import Toolbar from '../toolbar/toolbar';
import Title from '../title/title';
import Icon from '../icon/icon';
import Hr from '../hr/hr';
import drag from '../../assets/icons/drag-dots.svg';
import info from '../../assets/icons/info.svg';
import hide from '../../assets/icons/hide-eye.svg';
import show from '../../assets/icons/show.svg';
import close from '../../assets/icons/close.svg';
import Button from '../button/button';
import expand from '../../assets/icons/arrow-down.svg';
import Modal from '../../components/modal/modal';
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

	parseText = this.props.description.replace(/<[^>]*>/gm, '');
	SHOW_LAYER = "Show layer";
	HIDE_LAYER = "Hide layer";
	COLLAPSE_LAYER = "Collapse layer";
	EXPAND_LAYER = "Expand layer";
	LAYER_INFO= "Layer info";

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

	render() {
	const visibilityName = this.state.isVisible ? this.SHOW_LAYER : this.HIDE_LAYER;
	const collapseName = this.state.isExpanded ? this.COLLAPSE_LAYER : this.EXPAND_LAYER;
	return(
		<section>
			<header>
			<Icon src={drag}/>
			<Title title={this.props.name}/>

			<Toolbar>
				<li><Button
					dataTooltipText={visibilityName}
					src={this.state.isVisible ? show : hide}
					name={visibilityName}
					onClick={this.onChangeVisibility}
					// onMouseOver={this.onChangeVisibility}
					/>
					{/* <Tooltip 
					title={this.state.isVisible ? 'Show layer' : 'Hide layer'}
					isHover={this.state.isHover}/> */}
				</li>

				<li><Button
						name={this.LAYER_INFO}
						dataTooltipText={this.LAYER_INFO}
						src={info}
						onClick={this.onChangeInfo}
						title="more info"
						aria-haspopup="true"
						/>
						{/* <Tooltip isHover={this.state.isHover}/> */}
				</li> 

			<li><Button 
					src={expand}
					onClick={this.onChangeCollapse}
					dataTooltipText={collapseName}
					name={collapseName}
					ariaExpanded={this.state.isExpanded}
					className={this.state.isExpanded ? 'rotate-up-right-down' : 'rotate-down-right-up'}
					/>
					{/* <Tooltip isHover={this.state.isHover} isLegendItemVisible={this.state.isLegendItemVisible} */}
			</li>
			</Toolbar>
			{/* /<Toolbar description={this.props.description} */}
			</header>
			{this.state.isExpanded &&
				<Hr type={this.props.type} items={this.props.items}/>
			}
			{this.state.isInfoOpen &&
				<Modal>
					<Title title={this.parseText}/>
					<Button 
						className="button-modal"					
						name="close"
						src={close}
						onClick={this.onChangeInfo}/>
				</Modal>
			}
		</section>
	)
}
}

export default LegendItem