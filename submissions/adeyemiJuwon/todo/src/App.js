import React, { Component } from 'react';
import Form from './Form';
import Todos from './Todos';
import './App.css';

export default class App extends Component {
  state = {
    todos: [],
  };
  addtodo = (todo) => {
    const newTodo = {
      id: new Date().getTime().toString(),
      todo: todo,
      completed: false,
    };
    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  itemLeft = () => {
    return this.state.todos.filter((todo) => !todo.completed);
  };
  render() {
    return (
      <div>
        <div className="header">
          <Form addtodo={this.addtodo} />
        </div>

        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          itemLeft={this.itemLeft()}
        />
      </div>
    );
  }
}
