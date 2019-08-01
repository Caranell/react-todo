import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ onKeyPress }) => (
	<div>
		<input type="text" onKeyPress={onKeyPress} />
	</div>
);

AddTodo.propTypes = {
	addItem: PropTypes.func.isRequired
};

AddTodo.defaultProps = {
	addItem: () => {}
};
export default AddTodo;
