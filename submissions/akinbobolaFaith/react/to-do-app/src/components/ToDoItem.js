import React from 'react'

const ToDoItem = (props) => {
    return(
        <li 
            className="todo stack-small"
            key={props.key}
            style={{
                textDecoration: props.completed ? "line-through" : null,
                color: props.completed ? "green" :  null
            }}
        >
            <label 
                htmlFor={props.id}
                className="todo-label"
            >
                {props.name}
                <input 
                    id={props.id}
                    type={props.inputType}
                    name={props.id}
                    checked={props.completed}
                    onChange={() => props.handleChange(props.id)}
                />
            </label>
            
        </li>
    );
}

export default ToDoItem;