import React, { useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todosLeft,setTodosRemaining] = useState(0);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodosRemaining(todos.filter(todo => !todo.isCompleted).length);
    
  },
[ todos])
   

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);

  };

  return (
    <>
      <h1>What's your Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <div className='todo-footer'>
        <div className='todo-left-footer'>
          <p>{todosLeft} items left</p>
        </div>
        <div className='todo-middle-footer'>
          <p>All items</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <div className='todo-right-footer'>
          <p>X Clear Completed</p>
        </div>  
      </div>
    </>
  );
}

export default TodoList;