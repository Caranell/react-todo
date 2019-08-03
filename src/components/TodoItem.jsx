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

const TodoItem = ({ item, toggleComplete, deleteItem }) => {
	const classes = useStyles();
	return (
		<Grid item>
			<Grid item>
				<FormControlLabel
					control={
						<Checkbox
							icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
							checkedIcon={<CheckBoxIcon fontSize="small" />}
							value="checkedI"
							checked={item.completed}
							onClick={() => toggleComplete(item.id)}
						/>
					}
					label={item.text}
					className={item.completed ? classes.done : classes.standard}
				/>
				<IconButton
					aria-label="delete"
					className="makeStyles-margin-36"
					onClick={() => deleteItem(item.id)}
				>
					<DeleteIcon fontSize="small" />
				</IconButton>
			</Grid>
		</Grid>
	);
};

TodoItem.propTypes = {
	item: PropTypes.object.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

export default TodoItem;
