import React from 'react';

import Widget from '../components/widget/widget';
import './home.scss';


class Home extends React.Component {

    state = {
        data: []
    };

	componentDidMount(){
		fetch('https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json')
		.then(response => response.json())
        .then(dataResponse => this.setState({data: dataResponse})) // ya tengo data
	}

    render(){
        return(
            <div className="page">
            {this.state.data.map((item) => <Widget key={item.id} name={item.name} items={item.items} description={item.description} type={item.type}/>)}
            </div>
        )
    }
}

export default Home;