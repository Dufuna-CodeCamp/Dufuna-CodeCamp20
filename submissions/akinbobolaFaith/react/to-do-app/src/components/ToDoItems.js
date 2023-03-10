import React from 'react'

const ToDoItems = (props) => {
    return(
        <div className="lists">
            {props.entries.map((item) => {
                return (
                    <ul className="the-list">
                        <li 
                            key={item.key}
                            style={{textDecoration: props.elementKeys.includes(String(item.key)) && 'line-through', 
                            color: props.elementKeys.includes(String(item.key)) && 'green'}}
                        >
                        {item.text}
                        <input
                            id={item.key}
                            type={props.inputType}
                            onClick={props.handleClick}
                            value={item.key}
                        />
                        <label htmlFor={item.key}></label>
                        </li>
                    </ul>
                );
            })}
        </div>
    )
}


export default ToDoItems;