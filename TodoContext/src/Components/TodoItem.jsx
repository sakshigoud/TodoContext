import React from 'react'

import { useState } from 'react';
import { useTodo } from '../Context/TodoContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoItem({todo}){
    const {toggleComplete, updatedTodo, deleteTodo } =useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    
    const editTodo = () => {
        updatedTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
      }
      const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
      } 
    return (
        <div
            className={`d-flex border rounded px-3 py-2 gap-3 shadow-sm ${todo.completed ? "bg-success" : "bg-secondary"}`}
        >
            <input
                type="checkbox"
                className="form-check-input"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`form-control rounded ${isTodoEditable ? "border" : "border-0"} ${
                    todo.completed ? "text-decoration-line-through" : ""
                }`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center w-auto"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center w-auto"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
