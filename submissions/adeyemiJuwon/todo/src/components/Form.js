import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    todo: '',
  };
  onChange = (e) => this.setState({ todo: e.target.value.toLowerCase() });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addtodo(this.state.todo);
    this.setState({ todo: '' });
  };
  render() {
    return (
      <div className="form">
        <h1>TODO</h1>
        <form autoComplete="off" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="todo"
            required
            placeholder="Create a new todo..."
            value={this.state.todo}
            onChange={this.onChange}
          />

          <button type="submit" className={this.state.todo ? '' : 'disabled'}>
            +
          </button>
        </form>
      </div>
    );
  }
}
