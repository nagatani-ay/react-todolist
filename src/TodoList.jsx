import { EditMenu } from './EditMenu';

export function TodoList(props) {
  const setTodos = props.setTodos;
  const todos = props.todos;
  function removeTodo(target) {
    setTodos(todos.filter((todo, index) => todo.code !== target));
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

  const todolist = todos.map((todo, index) => (
    <li className="todolist" key={todo.code}>
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => {
          console.log(todo.code);
          changeTodo(todo.code, !todo.status, 'status');
        }}
      />

      <button
        onClick={() => {
          removeTodo(todo.code);
        }}
      >
        ×
      </button>

      <EditMenu
        todo={todo}
        changeTodo={(target, data, type) => changeTodo(target, data, type)}
      />

      {/* <p>CODE:{todo.code}</p> */}
      <p>{todo.text}</p>
      {/* <p>STATUS:{todo.status + ''}</p> */}
    </li>
  ));

  return <div>todolist:{todolist}</div>;
}
