import React, { useState } from 'react'
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
        <button type='submit' onClick = {addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
