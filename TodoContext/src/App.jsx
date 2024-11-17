import { useState,useEffect} from 'react'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import { TodoForm,TodoItem } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[todos,setTodos]=useState([])

  const addTodo=(todo)=>{
   setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updatedTodo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo:prevTodo)))
  }
  const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const toggleComplete=(id)=>{
     setTodos((prev)=>
      prev.map((prevTodo)=> 
        prevTodo.id===id ? {...prevTodo,
          completed:!prevTodo.completed}:prevTodo))
  }
 
useEffect(()=>{
   const todos =JSON.parse(localStorage.getItem("todos"))
   if(todos && todos.length > 0){
    setTodos(todos)
   }
},[])

useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
    <div className="bg-dark min-vh-100 py-5 ">
    <div className="container shadow rounded-lg px-5 py-3 text-white">
        <h1 className="fs-3 fw-bold text-center mb-4 mt-2 ">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm/>
        </div>
        <div className="d-flex flex-wrap gap-3">
            {todos.map((todo)=>(
              <div key={todo.id}
                 className="w-full"  >
                  <TodoItem todo={todo}/>
    
                </div>
            ))}
        </div>
    </div>
</div>

    </TodoProvider>
  )
}

export default App
