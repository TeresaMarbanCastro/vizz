import React from 'react';

import LegendItem from '../components/legendItem/legendItem';
import './home.scss';


class Home extends React.Component {

	state = {
		data: []
	};

	componentDidMount(){
		fetch('https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json')
		.then(response => response.json())
		.then(dataResponse => this.setState({data: dataResponse.filter(item => item.type !== 'timeline')}))
	}

	render(){
		return(
			<main className="page">
				{this.state.data.map((item) => {
					return(
						<LegendItem 
							key={item.id}
							name={item.name} 
							items={item.items}
							description={item.description} 
							type={item.type}/>
					)})
				}
			</main>
		)
	}
}

export default Home;