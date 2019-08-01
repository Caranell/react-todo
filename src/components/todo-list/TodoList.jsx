import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../todo-item/TodoItem';

const TodoList = ({ items, toggleComplete, deleteItem }) => (
	<div>
		{items.map(item => (
			<TodoItem
				key={item.id}
				item={item}
				toggleComplete={toggleComplete}
				deleteItem={deleteItem}
			/>
		))}
	</div>
);

TodoList.propTypes = {
	items: PropTypes.array,
	toggleComplete: PropTypes.func.isRequired
};

export default TodoList;
