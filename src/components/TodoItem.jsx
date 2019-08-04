import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	done: {
		'text-decoration': 'line-through'
	},
	standard: {}
});

const TodoItem = ({ completed, text, toggleComplete, deleteItem }) => {
	const classes = useStyles();
	return (
		<Grid item>
			<FormControlLabel
				control={
					<Checkbox
						icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
						checkedIcon={<CheckBoxIcon fontSize="small" />}
						value="checkedI"
						checked={completed}
						onClick={toggleComplete}
					/>
				}
				label={text}
				className={completed ? classes.done : classes.standard}
			/>
			<IconButton
				aria-label="delete"
				className="makeStyles-margin-36"
				onClick={deleteItem}
			>
				<DeleteIcon fontSize="small" />
			</IconButton>
		</Grid>
	);
};

TodoItem.propTypes = {
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
};

export default TodoItem;
