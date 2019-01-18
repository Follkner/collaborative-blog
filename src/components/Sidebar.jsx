import React, { Component } from 'react';
import '../styles/Sidebar.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '../actions/newsActions';

class Sidebar extends Component {

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){

		let buf = '';

		switch(e.target.innerHTML){
			case "Всі":
				buf = '';
				break;
			case "Спорт":
				buf = 'category=sports&';
				break;
			case "Наука":
				buf = 'category=science&';
				break;
			case "Технології":
				buf = 'category=technology&';
				break;
			case "business":
				buf = 'category=technology&';
				break;
			default:
				buf = '';
				
		}

		this.props.newsActions.uploadNews(buf);
	}

  	render() {
    	return (
      		<div className="sidebar">
      			Категорії
      			
      			<div onClick = {this.handleClick}>Всі</div>
      			<div onClick = {this.handleClick}>Спорт</div>
      			<div onClick = {this.handleClick}>Наука</div>
      			<div onClick = {this.handleClick}>Бізнес</div>
      			<div onClick = {this.handleClick}>Технології</div>

      		</div>
    	);
  	}
}

function mapStateToProps(state){
	return{
		category: state.category,
	}
}

function mapDispatchToProps(dispatch) {
  	return {
    	newsActions: bindActionCreators(newsActions, dispatch),
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);