import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);

  let [newTodo, setnewTodo] = useState("");

  let addTask = (event) => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setnewTodo("");
  };

  let updateTodo = (event) => {
    setnewTodo(event.target.value);
  };

  let deleteTask = (id) => {
    let copy = todos.filter((todo) => todo.id != id)
    setTodos(copy)
  };

  return (
    <>
      <h2>To Do List</h2>
      <input type="text" value={newTodo} onChange={updateTodo} /> &nbsp;
      <button onClick={addTask}>Add</button>
      <br />
      <br />
      <h4>Add Tasks</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span> &nbsp;
            <button
              onClick={() => {
                deleteTask(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
