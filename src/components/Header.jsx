import React, { Component } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  	render() {
    	return (
      		<div className="header">
      			<ul>		
      				<li>
      					<Link to="/">
      						Главная
      					</Link>     				
      				</li>
      				<li>
      					<Link to="/news">
      						Новости
      					</Link>     
      				</li>

      				<li>
      					<Link to="/callback">
      						Обратная связь
      					</Link>   
      				</li>
      			</ul>
      		</div>
    	);
  	}
}

export default Header;