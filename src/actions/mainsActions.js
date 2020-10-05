import {
	LOADING,
	ERROR,
	GET_OPTION,
} from '../types/mainsTypes';

export const getOption = (option) => async (dispatch) => {
	dispatch({
		type: LOADING,
	});

	if (option) {
		dispatch({
			type: GET_OPTION,
			payload: option,
		});
	} else {
		dispatch({
			type: ERROR,
			payload: `Option notfound`,
		});
	}
};
