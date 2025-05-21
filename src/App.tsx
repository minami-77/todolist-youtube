import React, { useState } from "react";
import './App.css'

function App() {
  const [inputValue, setInputValue] =useState("");
  // 型指定あり＜＞
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //ボタンを押したときにリロードしないようにする
    e.preventDefault();
    const newTodo: Todo ={
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  }



  return (
    <>
    <div className="App">
      <div>
        <h2>ToDo List with Typescript</h2>
        <form onSubmit ={(e) =>{handleSubmit(e)}}>
          <input type="text" onChange={(e)=>{handleChange(e)}}className="inputText"/>
          <input type="submit" value="add" className="submitButton"/>
        </form>
        <ul className="todoList">
          {todos.map(todo=>(
            <li key={todo.id}>{todo.inputValue}</li>
          ))}
        </ul>
      </div>
    </div>

    </>
  )
}

export default App
