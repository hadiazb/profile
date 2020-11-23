import { combineReducers } from 'redux';
import mainsReducer from './mainsReducer';
import languageReducer from './languageReducer';

export default combineReducers({
	mainsReducer,
	languageReducer
});
