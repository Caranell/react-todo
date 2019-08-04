import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ items, toggleComplete, deleteItem }) => (
	<Fragment>
		{items.map(item => (
			<TodoItem
				key={item.id}
				{...item}
				toggleComplete={() => toggleComplete(item.id)}
				deleteItem={() => deleteItem(item.id)}
			/>
		))}
	</Fragment>
);

TodoList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	toggleComplete: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
};

export default TodoList;
