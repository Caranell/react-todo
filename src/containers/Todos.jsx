import React, { Component } from 'react';
import uuid from 'uuid';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import Footer from '../components/Footer';

import Grid from '@material-ui/core/Grid';
class Todos extends Component {
	state = {
		items: [
			{
				id: uuid.v4(),
				text: 'visit doctor',
				completed: false
			},
			{
				id: uuid.v4(),
				text: 'buy milk',
				completed: true
			},
			{
				id: uuid.v4(),
				text: 'play mario',
				completed: true
			}
		],
		filter: 'all'
	};

	toggleComplete = id => {
		this.setState({
			items: this.state.items.map(item => {
				if (id === item.id) {
					item.completed = !item.completed;
				}
				return item;
			})
		});
	};

	addItem = (e, value) => {
		if (e.key === 'Enter') {
			const value = e.target.value.trim();
			if (value !== '') {
				const newItem = {
					id: uuid.v4(),
					text: value,
					completed: false
				};
				e.target.value = '';
				this.setState({
					items: [...this.state.items, newItem],
					filter: this.state.filter
				});
			}
		}
	};

	deleteItem = id => {
		this.setState({
			items: this.state.items.filter(item => item.id !== id)
		});
	};

	filterItems = filter => {
		switch (filter) {
			case 'active': {
				return this.state.items.filter(item => !item.completed);
			}
			case 'completed': {
				return this.state.items.filter(item => item.completed);
			}
			default:
				return this.state.items;
		}
	};

	changeFilter = newFilter => {
		this.setState({
			filter: newFilter
		});
	};

	render() {
		let { filter } = this.state;
		let filteredItems = this.filterItems(filter);
		return (
			<Grid
				container
				direction="column"
				justify="space-between"
				alignItems="center"
			>
				<AddTodo
					onKeyPress={this.addItem}
					handleEnter={this.handleEnter}
				/>
				<TodoList
					items={filteredItems}
					addItem={this.addItem}
					toggleComplete={this.toggleComplete}
					deleteItem={this.deleteItem}
				/>
				<Footer
					amount={filteredItems.length}
					activeFilter={this.state.filter}
					changeFilter={this.changeFilter}
				/>
			</Grid>
		);
	}
}

export default Todos;
