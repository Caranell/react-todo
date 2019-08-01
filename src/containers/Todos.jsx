import React, { Component } from 'react';
import uuid from 'uuid';

import TodoList from '../components/TodoList';

export default class Todos extends Component {
	state = {
		items: [
			{
				id: uuid.v4(),
				text: 'visit doctor',
				done: false
			},
			{
				id: uuid.v4(),
				text: 'buy milk',
				done: true
			},
			{
				id: uuid.v4(),
				text: 'play mario',
				done: true
			}
		]
	};
	render() {
		return <TodoList todos={this.state.items} />;
	}
}
