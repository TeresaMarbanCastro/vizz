import React from 'react'
import Toolbar from '../toolbar/toolbar';
import Title from '../title/title';
import Icon from '../icon/icon';
import LegendTypeItem from '../legendTypeItem/legendTypeItem';
import drag from 'assets/icons/drag-dots.svg';
import info from 'assets/icons/info.svg';
import hide from 'assets/icons/hide-eye.svg';
import show from 'assets/icons/show.svg';
import close from 'assets/icons/close.svg';
import Button from '../button/button';
import expand from 'assets/icons/arrow-down.svg';
import Modal from 'components/modal/modal';
import './legend.scss';

class Legend extends React.Component {
	constructor(){
		super();
		this.state = {
			isExpanded: true,
			isVisible: true,
			isInfoOpen: false
		};
	}

	SHOW_LAYER = "Show layer";
	HIDE_LAYER = "Hide layer";
	COLLAPSE_LAYER = "Collapse layer";
	EXPAND_LAYER = "Expand layer";
	LAYER_INFO= "Layer info";

	onChangeVisibility = () => {
		this.setState({isVisible: !this.state.isVisible})		
	}

	onChangeInfo = () => {
		this.setState({isInfoOpen: !this.state.isInfoOpen})
	}

	onChangeCollapse = () => {
		this.setState({isExpanded: !this.state.isExpanded})
	}

	render() {
		const visibilityName = this.state.isVisible ? this.SHOW_LAYER : this.HIDE_LAYER;
		const collapseName = this.state.isExpanded ? this.COLLAPSE_LAYER : this.EXPAND_LAYER;
		const parseText = (this.props.description || {}).replace(/<[^>]*>/gm, '');
		
		return (
			<section>
				<header className="legend-header">
					<Icon src={drag} className="legend-drag-icon"/>
					<Title title={this.props.name}/>
					<Toolbar>
						<li>
							<Button
								dataTooltipText={visibilityName}
								src={this.state.isVisible ? show : hide}
								name={visibilityName}
								onClick={this.onChangeVisibility}
							/>
						</li>
						<li>
							<Button
								name={this.LAYER_INFO}
								dataTooltipText={this.LAYER_INFO}
								src={info}
								onClick={this.onChangeInfo}
								aria-haspopup="true"
							/>
						</li> 
						<li>
							<Button 
								src={expand}
								onClick={this.onChangeCollapse}
								dataTooltipText={collapseName}
								name={collapseName}
								ariaExpanded={this.state.isExpanded}
								className={this.state.isExpanded ? 'rotate-up-right-down' : 'rotate-down-right-up'}
							/>
						</li>
					</Toolbar>
				</header>
				{this.state.isExpanded &&
					<LegendTypeItem type={this.props.type} items={this.props.items}/>
				}
				{this.state.isInfoOpen &&
					<Modal>
						<Title title={parseText}/>
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

export default Legend;