import React,{useState} from 'react';
import Todo from "./components/Todo";
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import "./styles.css";
import {nanoid} from "nanoid";

const FILTER_MAP = {
  Items:() => true,
  Active: task => !task.completed,
  Completed: task => task.completed,

};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('Items');


  function addTask(name) {
    const newTask = {id: "todo-" + nanoid(),name: name, completed:false}
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {

    const updatedTasks = tasks.map(task => {
      
      if(id === task.id) {
      
      return {...task,completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function clearCompletedTasks(){
     const completed = tasks.filter(task => task.completed === false)
     setTasks(completed);
  }

   let tasklist = tasks
   .filter(FILTER_MAP[filter])
   .map(task => (
     <Todo 
       id={task.id} 
        name={task.name} 
        completed={task.completed}
        key={task.id}
     />
   ));
  
   const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter} 
      setFilter={setFilter}
    />
   ));
 
  const completedTasks = tasks.filter(task => task.completed === false)
  let remainingTasks = completedTasks.length

  return (
    <div>
      <header>
           <h1 id="pageTitle">Todo</h1>
         <div className="container">  
           <div className="main">
              <section className="tasklist"> 
                 <Form addTask={addTask}/>
                 <ul className="listItems">{tasks
                    .filter(FILTER_MAP[filter])
                    .map(task => (
                       <li class={`todo-item ${ task.completed ? "completed" :'' }`}>
                       <Todo 
                        id={task.id} 
                        name={task.name} 
                        completed={task.completed}
                        key={task.id}
                        toggleTaskCompleted={toggleTaskCompleted}
                        clearCompletedTasks={clearCompletedTasks}
                    />
                    </li>
                    ))}
               </ul>
             </section> 
           </div> 
           <div className="footer">
            <div className="footer-list">
              <ul>
                  <li id="items">{remainingTasks} items left</li>
                  <li id="all-items"><span className="all">All</span>{filterList[0]}</li>
                  <li id="active">{filterList[1]}</li>
                  <li id="completed">{filterList[2]}</li>
                  <li id="clear" onClick={clearCompletedTasks}>XClear Completed</li>
               </ul>
            </div>
           </div>
        </div>  
      </header>  
    </div>
  );
}

export default App;