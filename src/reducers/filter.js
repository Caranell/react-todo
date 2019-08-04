import { FILTERS } from '../actions';

const activeFilter = (state = FILTERS.ALL, action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.filter;
		default:
			return state;
	}
};

export default activeFilter;