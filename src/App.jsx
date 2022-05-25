import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoAddMenu } from './TodoAddMenu';

function App() {
  const [test, setTest] = useState('test');
  const [targetText, setTarget] = useState('');
  const [todos, setTodos] = useState([]);
  const [isOpenMenu, toggleMenu] = useState(false);
  const todolist = todos.map((todo, index) => (
    <li key={todo.code}>
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => changeTodo(todo.code, !todo.status, 'status')}
      />

      <button
        onClick={() => {
          removeTodo(todo.code);
        }}
      >
        ×
      </button>

      <button
        onClick={() => {
          toggleMenu((isOpenMenu) => !isOpenMenu);
        }}
      >
        edit
      </button>

      <p>CODE:{todo.code}</p>
      <p>TEXT:{todo.text}</p>
      <p>STATUS:{todo.status + ''}</p>
      {editMenu(isOpenMenu, todo)}
    </li>
  ));
  function editMenu(b, data) {
    let editText = '';
    if (b) {
      return (
        <div>
          <input
            type="text"
            placeholder={data.text}
            onChange={(event) => {
              editText = event.target.value;
            }}
          />
          <button
            onClick={() => {
              changeTodo(data.code, editText, 'text');
              toggleMenu((isOpenMenu) => !isOpenMenu);
            }}
          >
            enter
          </button>
        </div>
      );
    } else {
      return <span>no</span>;
    }
  }
  function changeTodo(target, data, type) {
    console.log(target);
    console.log(data);

    const list = todos.map((x) => x);
    list.forEach((todo) => {
      if (type == 'status') {
        todo.code == target ? (todo.status = data) : todo.status;
      } else if (type == 'text') {
        todo.code == target ? (todo.text = data) : todo.text;
      }
    });
    setTodos(list);
  }
  function generateCode() {
    let code = Math.random().toString(32).substring(2);
    todos.forEach((todo, i) => {
      if (todo.code == code) {
        code = Math.random().toString(32).substring(2);
      }
    });
    return code;
  }
  function removeTodo(target) {
    setTodos(todos.filter((todo, index) => todo.code !== target));
  }

  return (
    <div className="App">
      <TodoAddMenu
        setTodos={setTodos}
        generateCode={() => generateCode()}
        setTarget={setTarget}
        targetText={targetText}
      />

      <button
        type="button"
        onClick={() => toggleMenu((isOpenMenu) => !isOpenMenu)}
      >
        isOpenMenu is: {isOpenMenu + ''}
      </button>

      <ul>{todolist}</ul>
    </div>
  );
}

export default App;
