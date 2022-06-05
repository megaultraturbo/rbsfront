import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from "react";

function App() {
  // state
  const [todos, setTodos] = useState([]);

  // binding
  const todoText = useRef();

  // side effects / lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  } ,[]);

  //events
  function addTodo(event) {
    event.preventDefault(); // strona sie nie odswieza przy submicie
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  // jsx - js syntax extension - to bedzie zwrocone na stronke jako html
  return(
    <div>
      <ul>
        {todos.map(todo => (<li key = {todo}>{todo}</li>))}
      </ul>

      <form onSubmit={addTodo}>
        <input ref={todoText}/>
        <input type="submit" value="Add item"/>
      </form>
    </div>
  )
}

export default App;
