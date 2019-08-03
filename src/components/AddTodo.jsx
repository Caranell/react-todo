import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const AddTodo = ({ onKeyPress }) => (
	<Grid item>
		<TextField
			multiline
			rowsMax="2"
			onKeyPress={e => onKeyPress(e, this)}
			helperText="press Enter to add new one"
		/>
	</Grid>
);

AddTodo.propTypes = {
	addItem: PropTypes.func.isRequired
};

AddTodo.defaultProps = {
	addItem: () => {}
};
export default AddTodo;
