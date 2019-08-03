import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import TodoItem from './TodoItem';

const TodoList = ({ items, toggleComplete, deleteItem }) => (
	<Grid
		container
		justify="center"
		alignItems="center"
		direction="column"
		wrap="nowrap"
		spacing={3}
	>
		{items.map(item => (
			<TodoItem
				key={item.id}
				item={item}
				toggleComplete={toggleComplete}
				deleteItem={deleteItem}
			/>
		))}
	</Grid>
);

TodoList.propTypes = {
	items: PropTypes.array,
	toggleComplete: PropTypes.func.isRequired
};

export default TodoList;
