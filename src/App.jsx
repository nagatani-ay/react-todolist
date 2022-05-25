import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [isOpenMenu, toggleMenu] = useState(false);
  const todolist = todos.map((todo) => <li key={todo}> {todo}</li>);

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
    setTodos((todos) => [...todos, { code:"",text: 'test' + todos.length }]);
  }

  function removeTodo() {
    setTodos(todos.filter((todo, index) => todo == 'test0'));
  }
  return (
    <div className="App">
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>

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
        <button
          type="button"
          onClick={() => {
            // 削除はfillter
            removeTodo();
          }}
        >
          remove
        </button>
      </p>
      <ul>{todolist}</ul>
    </div>
  );
}

export default App;
