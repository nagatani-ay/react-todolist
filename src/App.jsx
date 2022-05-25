import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [targetText, setTarget] = useState('');
  const [todos, setTodos] = useState([]);
  const [isOpenMenu, toggleMenu] = useState(false);
  const todolist = todos.map((todo) => (
    <li key={todo.code}>
      <input
        type="checkbox"
        onChange={() => {
          changeStatus(todo.code);
        }}
      />
      <button
        onClick={() => {
          removeTodo(todo.code);
        }}
      >
        ×
      </button>
      <p>CODE:{todo.code}</p>
      <p>TEXT:{todo.text}</p>
      <p>STATUS:{todo.status + ''}</p>
    </li>
  ));

  function test(b) {
    if (b) {
      return <p>text</p>;
    } else {
      return <span>text</span>;
    }
  }
  // HTMLの中に書く場合{isOpenMenu && <p>test</p>}
  // 三項演算子{isOpenMenu ? <p>true</p> : <p>false</p>}
  function addTodo() {
    setTodos((todos) => [
      ...todos,
      { code: generateCode(), text: targetText, status: false },
    ]);
  }

  function removeTodo(target) {
    setTodos(todos.filter((todo, index) => todo.code !== target));
  }

  function generateCode() {
    const code = Math.random().toString(32).substring(2);
    todos.forEach((todo, i) => {
      if (todo.code == code) {
        code = Math.random().toString(32).substring(2);
      }
    });
    return code;
  }

  function setTargetText(text) {
    setTarget((targetText = text));
  }
  function changeStatus(target) {
    console.log(target);
    setTodos(
      todos.map((todo, index) => {
        if ((todo.code = target)) {
          console.log('detect');
        }
      })
    );
  }

  return (
    <div className="App">
      <p>
        <button
          type="button"
          onClick={() => toggleMenu((isOpenMenu) => !isOpenMenu)}
        >
          isOpenMenu is: {isOpenMenu + ''}
        </button>
      </p>

      <p>
        <button
          type="button"
          onClick={() => {
            // pushはなどは再描画されないのでスプレット構文を使用して新たに配列を作成して保存
            addTodo();
          }}
        >
          add
        </button>
        <input
          type="text"
          value={targetText}
          onChange={(event) => {
            setTargetText(event.target.value);
          }}
        />
      </p>
      <ul>{todolist}</ul>
    </div>
  );
}

export default App;
