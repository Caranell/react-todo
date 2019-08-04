import rootReducer from '../reducers';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(
	rootReducer,
	persistedState
);

store.subscribe(() => {
	saveState({
		items: store.getState().items
	});
});

export default store;