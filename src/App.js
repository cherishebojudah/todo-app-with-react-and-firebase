import React, { useState } from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState(['take dogs for a walk', 'take the rubbish out']);

  return (
    <div className="App">
      <h1>Hello Clever Programmers</h1>
      <input />
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
