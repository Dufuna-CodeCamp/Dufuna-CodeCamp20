import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

export default function List() {
  const [todos, setTodos] = useContext(AppContext);

  const checkComplete = (id) => {
    const newTodos = [...todos];

    newTodos.filter((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(newTodos);
  };
  const ItemLeft = () => {
    return todos.filter((todo) => !todo.complete);
  };
  return (
    <>
      <div className="section">
        <ul className="todoLists">
          {todos.map((todo) => (
            <li key={todo.id} complete={todo.complete}>
              <label htmlFor="todo" className={todo.complete ? 'active' : ''}>
                {todo.name}
              </label>
              <input
                type="checkbox"
                checked={todo.complete}
                className="checkbox"
                onChange={() => checkComplete(todo.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="footer">
        <p className="item-left"> {ItemLeft().length} items left</p>
      </div>
    </>
  );
}
