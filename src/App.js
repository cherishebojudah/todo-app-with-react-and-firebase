import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads we need to listen to the db and fetch new todos as they're added or removed 
  useEffect(() => {
    //this code fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    //this is fired when the button is clicked
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