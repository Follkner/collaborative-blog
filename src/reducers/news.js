import {
	NEWS_REQUEST,
	NEWS_SUCCESS,
	NEWS_ERROR
} from '../constants/News'

const initialState = {
	articles: [],
	isFetching: false,
	error: null,
}

export default function news(state = initialState, action){

	switch(action.type){
		case NEWS_REQUEST:
			return { ...state, isFetching: true}

		case NEWS_SUCCESS:
			return { ...state, articles: action.payload, isFetching: false}

		case NEWS_ERROR:
			return { ...state, isFetching: false}

		default:
			return state;
	}
}