import React, { useReducer } from 'react';
import './App.css';
import { TodoForm } from './components';
import { todoReducer } from './reducers';
import { TodoItems } from './types';

function App() {
  const [todoItems, dispatchTodo] = useReducer(
    todoReducer,
    new Map([
      [1, { title: 'some', status: 'waiting' }],
      [2, { title: 'Sword Art Online', status: 'completed' }],
    ]) as TodoItems,
  );

  return (
    <div className="App">
      <TodoForm todoItems={todoItems} dispatchTodo={dispatchTodo} />
    </div>
  );
}

export default App;
