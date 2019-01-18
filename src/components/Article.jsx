import React, { Component } from 'react';
import '../styles/Article.css';

class Article extends Component {

  	render() {

  		const { author, title, description } = this.props;

    	return (
      		<div className="article">
      			<h3>{title}</h3>
      		</div>
    	);
  	}
}

export default Article;