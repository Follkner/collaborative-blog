import {
	NEWS_REQUEST,
	NEWS_SUCCESS,
	NEWS_ERROR
} from '../constants/News'

const initialState = {
	articles: [],
	isFetching: false,
	error: false,
}

export default function news(state = initialState, action){

	switch(action.type){
		case NEWS_REQUEST:
			return { ...state, isFetching: true, error: false}

		case NEWS_SUCCESS:
			return { ...state, articles: action.payload, isFetching: false, error: false}

		case NEWS_ERROR:
			return { ...state, isFetching: false, error: true}

		default:
			return state;
	}
}