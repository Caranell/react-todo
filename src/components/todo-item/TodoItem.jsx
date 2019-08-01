import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const TodoItem = ({ item, toggleComplete, deleteItem }) => (
	<div>
		<p>
			<input
				type="checkbox"
				defaultChecked={item.completed}
				onClick={() => toggleComplete(item.id)}
			/>
			<span className={item.completed ? 'done-text' : ''}>
				{item.text}
			</span>
			<input
				type="button"
				value="X"
				onClick={() => deleteItem(item.id)}
			/>
		</p>
	</div>
);

TodoItem.propTypes = {
	item: PropTypes.object.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

export default TodoItem;
