import {useContext,createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TodoContext = createContext({
   todos:[{
      id:1,
      todo:"Todo msg",
      completed: false,
   }],
   addTodo:(todo)=>{},
   updatedTodo:(id,todo)=>{},
   deleteTodo:(id)=>{},
   toggleComplete:(id)=>{}
   })

export const useTodo =()=>{
    return useContext(TodoContext)
}

 export const TodoProvider = TodoContext.Provider