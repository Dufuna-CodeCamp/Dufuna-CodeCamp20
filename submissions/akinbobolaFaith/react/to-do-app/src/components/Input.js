import React from 'react'

const Input = (props) => {
    return (
        <div className="input">
            <form className='form-input' onSubmit={props.addItem}>
                <input
                    className="todo-input"
                    id="new-todo-input"
                    name={props.name}
                    type="text"
                    value={props.value}
                    onChange={props.handleChange}
                    placeholder="Create a new todo..."
                    required
                />
                <button
                    className="todo-input btn"
                    type="submit"
                >
                    +
                </button>
            </form>
        </div>
    )
}

export default Input;