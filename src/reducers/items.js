import uuid from 'uuid';

const INITIAL_STATE = [
	{
		id: uuid.v4(),
		text: 'visit doctor',
		completed: false
	},
	{
		id: uuid.v4(),
		text: 'buy milk',
		completed: true
	},
	{
		id: uuid.v4(),
		text: 'play mario',
		completed: true
	}
]

const items = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_ITEM': return [
			...state,
			{
				id: action.id,
				text: action.text,
				completed: false
			}
		];
		case 'TOGGLE_ITEM':
			return state.map(item =>
				item.id === action.id
					? { ...item, completed: !item.completed }
					: item);
		case 'DELETE_ITEM':
			return state.filter(item =>
				item.id !== action.id);
		default:
			return state;
	}
}

export default items;