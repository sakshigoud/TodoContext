import React,{useState} from 'react'
import {useTodo} from '../Context/TodoContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm() {
    const[todo,setTodo] = useState("")
   const{addTodo}  =useTodo()
   const add = (e)=>{
         e.preventDefault()
         if(!todo) return
            addTodo({todo,completed:false})
            setTodo("")
   }
   
    return (
      <form className="d-flex"  onSubmit={add} >
        <input
          type="text"
          placeholder="Write Todo..."
          className="form-control rounded-start px-3 py-2 border bg-light border-secondary  "
          value ={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button type="submit" className="btn btn-success rounded-end px-3 py-2 ms-2">
          Add 
        </button>

      </form>
    );
  }
  
  export default TodoForm;
  