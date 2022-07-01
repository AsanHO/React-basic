import { useEffect, useState } from "react";

function Hello() {
  useEffect(function () {
    console.log("Hi : ) ");
    return function () {
      console.log("bye : ( ");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((tomato) => !tomato);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
