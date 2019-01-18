import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
	<Provider store={store}>
    	<div className='app'>
      		<App />
    	</div>
  	</Provider>, 
  	document.getElementById('root')
);