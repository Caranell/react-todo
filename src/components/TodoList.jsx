import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
	<div>
		{todos.map(todo => (
			<TodoItem key={todo.key} item={todo} />
		))}
	</div>
);

TodoList.propTypes = {};

export default TodoList;
