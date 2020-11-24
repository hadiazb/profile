import { CHANGE_OPTION_LANGUAGE } from '../types/languageTypes';

export const changeOption = (option) => async (
	dispatch
) => {
	dispatch({
		type: CHANGE_OPTION_LANGUAGE,
		payload: option,
	});
};
