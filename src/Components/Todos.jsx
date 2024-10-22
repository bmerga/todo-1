import axios from "axios";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Form from "./Form";

function Todos() {
    const [todos, setTodos] = useState([]);
    const [newTitle, setNewTitle] = useState('');
const [editedTitle, setEditedTitle] = useState(null);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => setTodos(response.data.filter((data) =>data.id<6)))
            
    //     }, []);
       
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
      
    
    const handleEditClick = (title) => {
        setEditedTitle(title);
        setNewTitle(title);
    };
    const handleChange = (e) => {
        setNewTitle(e.target.value);
    }

   const handleSave = (title) => {
       const updatedTodos = todos.map((todo) => 
       todo.title === edited ? { ...todo, title: newTitle
           
       };
       setTodos(updatedTodos);
       setEditedTitle(null);
       setNewTitle('');
       
   }

   
    return (
    <div> 
        {todos.map((obj)=> (
           <div key = {obj.id + obj.title}>
                
                <div> 
                   <input type="text" value={newTitle} onChange={handleChange}/> 
                   <button onClick={() => handleSave(obj.title)}>Save</button>
               </div>
               <div onClick={() => handleEditClick(obj.title)}> <Todo obj={obj}/> </div>
          </div>)
             )}
    
                <button onClick={() => handleDelete(obj.id)} 
             style={{color: "red"}}> Delete </button> 
                            
                <Form todos={todos} setTodos={setTodos}/>
                                
    </div>
    );
};

export default Todos;