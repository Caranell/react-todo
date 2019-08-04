import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const AddTodo = ({ dispatch }) => (
	<Grid item>
		<TextField
			multiline
			rowsMax="2"
			onKeyPress={e => {
				if (e.key === 'Enter') {
					const value = e.target.value.trim();
					if (value !== '') {
						dispatch(addItem(value));
					}
					e.target.value = '';
				}
			}}
			helperText="press Enter to add new one"
		/>
	</Grid>
);

export default connect()(AddTodo);
