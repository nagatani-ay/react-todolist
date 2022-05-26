import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoAddMenu } from './TodoAddMenu';
import { TodoList } from './TodoList';

function App() {
  const [targetText, setTarget] = useState('');
  const [todos, setTodos] = useState([]);

  function generateCode() {
    let code = Math.random().toString(32).substring(2);
    todos.forEach((todo, i) => {
      if (todo.code == code) {
        code = Math.random().toString(32).substring(2);
      }
    });
    return code;
  }

  return (
    <div className="App">
      <TodoAddMenu
        setTodos={setTodos}
        generateCode={() => generateCode()}
        setTarget={setTarget}
        targetText={targetText}
      />

      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
