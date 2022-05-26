import React,{useState} from "react"
export function EditMenu(props) {
  const todo = props.todo;
  const changeTodo = props.changeTodo;


  const [isOpen,toggleMenu]=useState(false);
  const [newText,setText]=useState("");
  function editMenu(){
    if(isOpen){
      return (
        <div>
          <input
            type="text"
            placeholder={todo.text}
            onChange={(event) => {
              setText (event.target.value) 
            }}
            />
          <button
            onClick={() => {
              changeTodo(todo.code, newText, 'text');
              toggleMenu(false)
            }}
          >
            enter
          </button>
        </div>
     )
    }else{
      return <button onClick={()=>toggleMenu(true)}>edit</button>
    }
  }

  return editMenu()
}
