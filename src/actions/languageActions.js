import {
	LOADING,
	ERROR,
	CHANGE_OPTION_LANGUAGE,
} from '../types/languageTypes';

export const changeOption = (option) => async (dispatch) => {
	dispatch({
		type: LOADING,
	});

	if (option) {
		dispatch({
			type: CHANGE_OPTION_LANGUAGE,
			payload: option,
		});
	} else {
		dispatch({
			type: ERROR,
			payload: `Option notfound`,
		});
	}
};
