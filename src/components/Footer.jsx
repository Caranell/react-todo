import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputBase from '@material-ui/core/InputBase';
import { FILTERS } from '../actions';

const Footer = ({ amount}) => (
	<Grid item>
		<InputBase inputProps={{ value: 'Number of items: ' + amount }} />
		<ButtonGroup size="small" aria-label="small outlined button group">
			<Filter filter={FILTERS.ALL}>ALL</Filter>
			<Filter filter={FILTERS.ACTIVE}>ACTIVE</Filter>
			<Filter filter={FILTERS.COMPLETED}>COMPLETED</Filter>
		</ButtonGroup>
	</Grid>
);

Footer.propTypes = {
	amount: PropTypes.number.isRequired
};

export default Footer;
