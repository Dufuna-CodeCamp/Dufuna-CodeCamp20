import React, { Component } from 'react';
import TodoList from './TodoList';

export default class Todos extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <ul className="todoLists">
            {this.props.todos.map((todo, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
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
      </div>
    );
  }
}
