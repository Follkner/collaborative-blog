import {
	NEWS_REQUEST,
	NEWS_SUCCESS,
	NEWS_ERROR
} from '../constants/News'

export const uploadNews = (category = '') => {
	return (dispatch) =>{

		dispatch({
			type: NEWS_REQUEST,
		})


		let url = 'https://newsapi.org/v2/top-headlines?' +
          category +
          'country=ua&' +
          'apiKey=48376045ee0340699fa633175e51b607';

		let req = new Request(url);

		fetch(req)
    		.then(function(response) {
        		return response.json(); 		
    		})
    		.then(function(response){
    			dispatch({
					type: NEWS_SUCCESS,
					payload: response.articles,
				})
    		})
    		.catch(dispatch({
    			type: NEWS_ERROR,
    		}))
	}
}