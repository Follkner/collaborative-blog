import React, { Component } from 'react';
import '../styles/News.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '../actions/newsActions';
import Article from '../components/Article';

class News extends Component {

	componentDidMount(){		
		this.props.newsActions.uploadNews();
	}

  	render() {
  		
  		const { articles, error, isFetching } = this.props.news;

  		const data = articles.map((item, index) =>{
  			return (<Article 
  						author = {item.author}
  						title = {item.title}
  						description = {item.description}
  						key = {index}
  					/>);
  		})

    	return (
      		<div className="news">
      			{isFetching? "Загрузка...": data}
      		</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(News);