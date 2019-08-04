import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.activeFilter
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setFilter(ownProps.filter))
});

const Filter = ({ active, children, onClick }) => {
	return (
		<Button disabled={active} onClick={onClick}>
			{children}
		</Button>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter)