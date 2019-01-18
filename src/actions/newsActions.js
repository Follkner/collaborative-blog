import {
	NEWS_REQUEST,
	NEWS_SUCCESS,
	NEWS_ERROR
} from '../constants/News'

export const uploadNews = () => {
	return (dispatch) =>{

		dispatch({
			type: NEWS_REQUEST,
		})

		let url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2019-01-17&' +
          'sortBy=popularity&' +
          'apiKey=48376045ee0340699fa633175e51b607';

		let req = new Request(url);


		setTimeout(function(){
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

    	}, 3000)

	}
}