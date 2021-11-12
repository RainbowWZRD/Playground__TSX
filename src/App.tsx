import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState<string[]>(['TS', 'JS', 'TSX', 'Dream Team', 'State'])

  const addTodoHandler = (newTodo: string) => {
    setTodos((prevValue) => {
      return [...prevValue, newTodo];
    })
  }

  return (
    <div>
      <h1>TSX TODO APP</h1>
      <Todos items={todos} children={[]} />
      <AddTodo onAddTodo={addTodoHandler} />
    </div>
  );
}

export default App;
