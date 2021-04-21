import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Todo from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['take dogs for a walk', 'take the rubbish out', 'cherish wants to learn react']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Clever Programmers</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled = {!input}  type='submit' onClick = {addTodo} variant="contained" color="primary">Add Todo</Button>
        {/* <button type='submit' onClick = {addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text = {todo}/>
          //<li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;