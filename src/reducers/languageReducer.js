import {
	CHANGE_OPTION_LANGUAGE,
	LOADING,
	ERROR,
} from '../types/languageTypes';

const INITIAL_STATE = {
	language: true,
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_OPTION_LANGUAGE:
			return {
				...state,
				language: action.payload,
				loading: false,
				error: '',
			};

		case LOADING:
			return {
				...state,
				loading: true,
			};

		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};