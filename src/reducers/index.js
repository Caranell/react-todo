import { combineReducers } from 'redux';
import items from './items';
import activeFilter from './filter';

const rootReducer=combineReducers({
	items, 
	activeFilter
});

export default rootReducer;
