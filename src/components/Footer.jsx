import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputBase from '@material-ui/core/InputBase';


const FILTERS = [
	{
		id: uuid.v4(),
		name: 'all'
	},
	{
		id: uuid.v4(),
		name: 'active'
	},
	{
		id: uuid.v4(),
		name: 'completed'
	}
];

const Footer = ({ amount, activeFilter, changeFilter }) => (
	<Grid item>
		<InputBase
			inputProps={{ value: 'Number of items: ' + amount }}
		/>
		<ButtonGroup size="small" aria-label="small outlined button group">
			{FILTERS.map(({ id, name }) => (
				<Button
					disabled={name === activeFilter ? true : false}
					onClick={() => changeFilter(name)}
					key={id}
				>
					{name}
				</Button>
			))}
		</ButtonGroup>
	</Grid>
);

Footer.propTypes = {
	amount: PropTypes.number,
	activeFilter: PropTypes.string,
	changeFilter: PropTypes.func
};

Footer.defaultProps = {
	amount: 0,
	activeFilter: 'all',
	changeFilter: () => {}
};

export default Footer;
