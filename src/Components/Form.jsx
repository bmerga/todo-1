import React, { useState } from "react";

function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({
        id: Date.now(),
        title: "",
        completed: false,
    });
    const handleChange = (e) => {
       e.preventDefault()
        setTodo({
            ...todo,
            title: e.target.value,
        });
    };
   const handleClick = () => {
       setTodos([...todos, todo])
       setTodo({  id: Date.now(),
        title: "",
        completed: false,})
   }

  return (
    <div>
        <input 
        type = 'text' 
        value={todo.title} 
        placeholder="add to do here" 
        onChange={handleChange}/> 
        <button onClick={handleClick}>Add todo</button>
        
    </div>
  );
}

export default Form;