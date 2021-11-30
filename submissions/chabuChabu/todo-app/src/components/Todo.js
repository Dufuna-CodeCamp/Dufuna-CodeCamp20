// import React,{useState} from 'react';

export default function Todo(props){

     return (
         <li>
         <div className="todo">
           
            <p htmlFor={props.id}>
               {props.name}
            </p>
            <p>
            <input id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
            />
             <label htmlFor="items"></label>
             </p>
         </div>
      </li>
    );
}