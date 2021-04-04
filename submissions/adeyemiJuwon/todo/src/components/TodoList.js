import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <li complete={this.props.todo.complete}>
        <p htmlFor="todo" className={this.props.todo.completed ? 'active' : ''}>
          {this.props.todo.todo}
        </p>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          className="checkbox"
          onChange={this.props.markComplete.bind(this, this.props.id)}
        />
      </li>
    );
  }
}
