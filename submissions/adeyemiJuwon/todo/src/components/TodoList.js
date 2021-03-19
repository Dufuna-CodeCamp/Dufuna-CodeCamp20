import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <li complete={this.props.todo.complete}>
        <label
          htmlFor="todo"
          className={this.props.todo.completed ? 'active' : ''}
        >
          {this.props.todo.todo}
        </label>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          className="checkbox"
          onChange={this.props.markComplete.bind(this, this.props.todo.id)}
        />
      </li>
    );
  }
}
