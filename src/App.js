import styled from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue(counter + 1);
  console.log("always");
  useEffect(() => console.log("onetime"), []);
  useEffect(() => console.log(keyword), [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search!"
      ></input>
      <h1 className={styled.title}>welcome back!{counter}</h1>
      <button onClick={onClick}> CLick!!!!</button>
    </div>
  );
}

export default App;
