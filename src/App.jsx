import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['test1']);
  const [isOpenMenu, toggleMenu] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        {/* v-ifの代わり*/}
        {isOpenMenu && <p>test</p>}

        {/* v-ifの代わり 三項演算子 */}
        {isOpenMenu ? <p>true</p> : <p>false</p>}
        <p>
          <button
            type="button"
            onClick={() => toggleMenu((isOpenMenu) => !isOpenMenu)}
          >
            isOpenMenu is: {isOpenMenu + ''}
          </button>
        </p>

        <p>
          <div>{todos}</div>
          <button
            type="button"
            onClick={() => {
              // pushはなどは再描画されないのでスプレット構文を使用して新たに配列を作成して保存
              setTodos([...todos, 'test2']);
            }}
          >
            add
          </button>
          <button
            type="button"
            onClick={() => {
              // 削除はfillter
              setTodos(todos.filter((todo, index) => todo !== 'test2'));
            }}
          >
            remove
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
