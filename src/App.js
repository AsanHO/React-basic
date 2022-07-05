import React, { useState } from "react";

function App() {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setToDos((cur) => [todo, ...cur]);
    setToDo(""); //제출이 완료되면 빈칸으로 업데이트
  };

  return (
    <div>
      <h1>To Do List ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="WEWORK!"
        />
        <button>Add</button>
      </form>
      <hr />
      {todos.map((item, index) => (
        <li key={index}>{item}</li> //react에서 li태그는 index props를 가져야 함
      ))}
    </div>
  );
}

export default App;
