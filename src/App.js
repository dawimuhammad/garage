import React, { Component } from 'react';
import './App.css';

import Car from './containers/Car'
import Garage from './containers/Garage'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
	render() {
		return (
			<Provider store={ store }>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={ Car }></Route>
						<Route exact path='/garage' component={ Garage }></Route>
					</Switch>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App;
