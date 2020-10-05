import {
	GET_OPTION,
	LOADING,
	ERROR,
} from '../types/mainsTypes';

const INITIAL_STATE = {
	mains: 1,
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_OPTION:
			return {
				...state,
				mains: action.payload,
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
