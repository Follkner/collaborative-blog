import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import News from '../components/News';
import Sidebar from '../components/Sidebar';
import HomePage from '../components/HomePage';
import Callback from '../components/Callback';

import * as newsActions from '../actions/newsActions';

class App extends Component {
  	render() {

	    return (
		    <Router>
			    <div className="App">
			        <Header/>
			        <Route exact path="/" component={HomePage}/>		         	       			    	         			    	
				    <div className = "container">
				        <Route exact path="/news" component={News} smth = '121'/>         			    	         			    	
			         	<Route exact path="/news" component={Sidebar}/>  
				    </div>
				    <Route exact path="/callback" component={Callback}/>
			    </div>   
		    </Router>
	    );
  	}
}

function mapStateToProps(state){
	return{
		news: state.news,
	}
}

function mapDispatchToProps(dispatch) {
  	return {
    	newsActions: bindActionCreators(newsActions, dispatch),
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
