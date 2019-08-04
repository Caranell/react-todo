import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import Footer from '../components/Footer';

import { toggleItem, deleteItem } from '../actions';
import { FILTERS } from '../actions';
import Grid from '@material-ui/core/Grid';

const getFilteredItems = (items, filter) => {
	switch (filter) {
		case FILTERS.ALL:
			return items;
		case FILTERS.ACTIVE:
			return items.filter(item => !item.completed);
		case FILTERS.COMPLETED:
			return items.filter(item => item.completed);
		default:
			throw new Error('Cannot recognize filter');
	}
};

const mapStateToProps = state => {
	return {
		items: getFilteredItems(state.items, state.activeFilter)
	};
};

const mapDispatchToProps = dispatch => ({
	toggleItem: id => dispatch(toggleItem(id)),
	deleteItem: id => dispatch(deleteItem(id))
});

class Todos extends Component {
	render() {
		const { toggleItem, deleteItem, items } = this.props;
		return (
			<Grid
				container
				direction="column"
				justify="space-around"
				alignItems="center"
			>
				<AddTodo />
				<TodoList
					items={items}
					toggleComplete={toggleItem}
					deleteItem={deleteItem}
				/>
				<Footer amount={items.length} />
			</Grid>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todos);
