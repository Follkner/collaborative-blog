import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import { Provider } from 'react-redux';
import store from '../store/store.js';

import Header from '../components/Header';
import News from '../components/News';
import Sidebar from '../components/Sidebar';
import HomePage from '../components/HomePage';
import Callback from '../components/Callback';

class App extends Component {
  	render() {
	    return (
		    <Provider store = {store}>
		    	<Router>
			        <div className="App">
			         	<Header/>
			         	<Route exact path="/" component={HomePage}/>		         	       			    	         			    	
				        <div className = "container">
				         	<Route exact path="/news" component={News}/>         			    	         			    	
			         		<Route exact path="/news" component={Sidebar}/>  
				        </div>
				        <Route exact path="/callback" component={Callback}/>
			        </div>   
		        </Router>
		    </Provider>
	    );
  	}
}

export default App;
