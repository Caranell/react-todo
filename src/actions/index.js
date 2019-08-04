import uuid from 'uuid';

export const addItem = text => ({
	type: 'ADD_ITEM',
	id: uuid.v4(),
	text, 
	completed: false
});

export const setFilter = filter => ({
	type: 'SET_FILTER',
	filter
});

export const toggleItem = id => ({
	type: 'TOGGLE_ITEM',
	id
});

export const deleteItem = id => ({
	type: 'DELETE_ITEM',
	id
});

export const FILTERS = {
	ALL: 'ALL',
	ACTIVE: 'ACTIVE',
	COMPLETED: 'COMPLETED'
};