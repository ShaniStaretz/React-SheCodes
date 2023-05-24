import counterReducer from './counter';
import loggedReducer from './isLogged';
import rootReducer from './rootReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	counter: counterReducer,
	islogged: loggedReducer,
	exercise:rootReducer
});

export default allReducers;
