import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({item }) => (
	<div>
		<p>
			<input type="checkbox" />
			<span className={item.done ? 'done-text' : 'text'}>{item.text}</span>
		</p>
	</div>
);

TodoItem.propTypes = {};

export default TodoItem;
