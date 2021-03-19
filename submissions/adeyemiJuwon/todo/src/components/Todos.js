import React, { Component } from 'react';
import TodoList from './TodoItem';

export default class Todos extends Component {
  render() {
    return (
      <>
        <div className="section">
          <ul className="todoLists">
            {this.props.todos.map((todo) => {
              return (
                <TodoList
                  key={todo.id}
                  todo={todo}
                  markComplete={this.props.markComplete}
                />
              );
            })}
          </ul>
        </div>
        <div className="footer">
          <p className="item-left">{this.props.itemLeft.length} items left</p>
        </div>
      </>
    );
  }
}
