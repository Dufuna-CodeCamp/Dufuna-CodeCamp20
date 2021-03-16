import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

export default function Footer() {
  const [todos, setTodos] = useContext(AppContext);

  const ItemLeft = () => {
    return todos.filter((todo) => todo.complete === false);
  };
  const activeItem = () => {
    if (todos) {
      const newTodo = todos.filter((todo) => todo.complete === false);
      return setTodos(newTodo);
    } else {
      setTodos(todos);
    }
  };
  const completeItem = () => {
    const newTodo = todos.filter((todo) => todo.complete === true);
    return setTodos(newTodo);
  };
  const allItem = () => {
    const newTodos = [...todos];
    newTodos.filter((todo) => {
      if (todo.complete) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = () => {
    setTodos(ItemLeft());
  };

  return (
    <>
      <div className="footer">
        <p className="item-left"> {ItemLeft().length} items left</p>
        <div className="items">
          <button onClick={allItem}>All items</button>
          <button onClick={activeItem}>Active</button>
          <button onClick={completeItem}>Completed</button>
        </div>

        <button onClick={deleteTodo} className="delete ">
          Clear Completed
        </button>
      </div>
    </>
  );
}
