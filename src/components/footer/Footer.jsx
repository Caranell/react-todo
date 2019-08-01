import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import './style.css'
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
	<div className="footer">
		<span className="amount">{amount}</span>
		<div className="buttons">
			{FILTERS.map(({ id, name }) => (
				<button
					onClick={() => changeFilter(name)}
					key={id}
					className={name === activeFilter ? 'active-button' : ''}
				>
					{name}
				</button>
			))}
		</div>
	</div>
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
