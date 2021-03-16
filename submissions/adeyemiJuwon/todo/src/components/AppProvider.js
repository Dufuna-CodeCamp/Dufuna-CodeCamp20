import React, { useState, useEffect, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContext.Provider value={[todos, setTodos]}>
      {props.children}
    </AppContext.Provider>
  );
};
