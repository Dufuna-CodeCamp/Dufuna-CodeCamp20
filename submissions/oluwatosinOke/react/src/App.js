import React, {useState, useEffect} from "react";
import "./App.css";


function Todo({ todo, index, completeTodo }) {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "",color: todo.isCompleted ? "green" : ""}}>
      {todo.text}
      <div>
        <label className='container'>
        <input type="checkbox"  onClick={() => completeTodo(index)}/>
        <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <div className='todo-header'>
      <h1>TODO</h1>
      <div className='todo-create'>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Create a new todo..."
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}/>
          <div className='todo-button'>
            <button type='submit'>+</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [todosRemaining,setTodosRemaining] = useState(0); 
  const [todos, setTodos] = React.useState([
    
  ]);
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTodosRemaining(todos.filter(todo => !todo.isCompleted).length)
  });


  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <div className='todo-footer'>
        <div className='todo-left-footer'>
          <p>{todosRemaining} items left</p>
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
    </div>
  );
}

export default App;