import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

export default function Footer({ filterList }) {
  const [todos, setTodos] = useContext(AppContext);

  const ItemLeft = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const deleteTodo = () => {
    setTodos(ItemLeft());
  };

  return (
    <>
      <div className="footer">
        <p className="item-left"> {ItemLeft().length} items left</p>
        <div className="items">{filterList}</div>
        <button onClick={deleteTodo} className="delete ">
          Clear Completed
        </button>
      </div>
    </>
  );
}
