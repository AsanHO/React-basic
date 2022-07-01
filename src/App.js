import React, { useState } from "react";

function M2H() {
  const [amounts, setAmounts] = React.useState();
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => setAmounts(event.target.value);
  const reset = () => setAmounts(0);
  const onflip = () => {
    reset();
    setFlipped((cur) => !cur);
  };
  return (
    <div>
      <h1>분-시간 변환기</h1>

      <div>
        <label htmlfor="m">Minutes</label>
        <input
          value={flipped ? amounts * 60 : amounts}
          id="m"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlfor="h">Hours</label>
        <input
          value={flipped ? amounts : amounts / 60}
          id="h"
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onflip}>flip</button>
    </div>
  );
}

function K2M() {
  const [amounts, setAmounts] = React.useState();
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => setAmounts(event.target.value);
  const reset = () => setAmounts(0);
  const onflip = () => {
    reset();
    setFlipped((cur) => !cur);
  };
  return (
    <div>
      <h1>Convert!</h1>
      <div>
        <label htmlfor="m">Meter</label>
        <input
          value={flipped ? amounts * 1000 : amounts}
          id="m"
          placeholder="Meter"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlfor="k">KM</label>
        <input
          value={flipped ? amounts : amounts / 1000}
          id="k"
          placeholder="KM"
          type="number"
          onChange={onChange}
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onflip}>flip</button>
    </div>
  );
}

function App() {
  const [index, setIndex] = useState("선택");
  const onSelect = (event) => setIndex(event.target.value);
  return (
    <div>
      <h1>SUPER CONVERTER</h1>
      <select value={index} onChange={onSelect}>
        <option value={"선택"}>변환기를 선택해주세용</option>
        <option value={"시간"}>분-시간 변환기</option>
        <option value={"거리"}>KM-M 변환기</option>
      </select>
      <hr />
      {index === "xx" ? "변환기를 선택하세요" : null}
      {index === "시간" ? <M2H /> : null}
      {index === "거리" ? <K2M /> : null}
    </div>
  );
}

export default App;
