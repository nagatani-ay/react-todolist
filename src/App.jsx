import { useState, useEffect, useRef } from 'react';
import './App.css';
import { TodoAddMenu } from './TodoAddMenu';
import { TodoList } from './TodoList';

function App() {
  const mounted = useRef(false);
  const [targetText, setTarget] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setTodos(JSON.parse(localStorage.getItem('todolist')));
      console.log('初期ロード');
    } else {
      if (JSON.parse(localStorage.getItem('todolist')) == todos) {
        console.log('同じ');
      } else {
        localStorage.setItem('todolist', JSON.stringify(todos));
        console.log(todos);
      }
    }
  }, [todos]);

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
      <ul>
        <TodoList setTodos={setTodos} todos={todos} />
      </ul>
    </div>
  );
}

export default App;
