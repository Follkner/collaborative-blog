import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './Header';
import News from '../containers/News';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import Callback from './Callback';

class App extends Component {
  	render() {

	    return (
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
	    );
  	}
}

export default App;
