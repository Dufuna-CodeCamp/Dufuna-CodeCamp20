import React,{useState} from "react";

function Form(props) {
    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value);
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return ( 
        <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          className="textInput"
          placeholder="Create a new todo..."
          name="text"
          value={name}
          onChange={handleChange}
        />
        <button 
          type="submit"
          className="button"
          disabled={name.length<1}
          >
          +
        </button>
      </form>

    );
}

export default Form;