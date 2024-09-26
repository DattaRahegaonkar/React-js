import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todo, settodo] = useState([
    { task: "sample", id: uuidv4(), isDone: false },
  ]);
  const [Task, setTask] = useState("");
  let addTask = () => {
    settodo(() => {
      return [...todo, { task: Task, id: uuidv4(), isDone: false }];
    });
    setTask("");
  };
  let valueChange = (event) => {
    setTask(event.target.value);
  };
  let delTodo = (preTaskId) => {
    settodo(todo.filter((element) => element.id != preTaskId));
  };
  let MarkAsAllDone = () => {
    settodo((pretask) =>
      pretask.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };
  let MarkAsDone = (preTaskId) => {
    settodo((pretask) =>
      pretask.map((todo) => {
        if (todo.id == preTaskId) {
          if (todo.isDone == false) {
            return { ...todo, isDone: true };
          } else {
            return todo;
          }
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input placeholder="add a task" value={Task} onChange={valueChange} />
      &nbsp;
      <button onClick={addTask}>Add Task</button>
      <br /> <br /> <hr />
      <ul>
        {todo.map((ele) => {
          return (
            <p key={ele.id}>
              <span
                style={ele.isDone ? { textDecorationLine: "line-through" } : {}}
              >
                {ele.task}
              </span>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <span>
                <button onClick={() => delTodo(ele.id)}>Delete</button>
                &nbsp; &nbsp;
                <button onClick={() => MarkAsDone(ele.id)}>Mark As Done</button>
              </span>
            </p>
          );
        })}
      </ul>
      <button onClick={MarkAsAllDone}>Mark All as Done</button>
    </div>
  );
}
