---
emoji: ๐ค
title: ๋ฆฌ์กํธ ๊ณต๋ถ๋ฅผ ์์ํ๋ฉด์
date: "2022-06-28"
author: AsanHo
tags:
categories: react
---

# ๋ฆฌ์กํธ๋ ์ ๊ฐ๋ฐ๋์๋๊ฐ

๊ธฐ์ ์ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด ๊ฐ๋ฐ๋๋ค. ๊ทธ๋ฆฌ๊ณ  ํด๊ฒฐํ๊ธฐ ์ํ ๋ฌธ์ ๊ฐ ๋ฌด์์ธ์ง ์๋ค๋ฉด, ๊ทธ ๊ธฐ์ ์ ๋ ์ ์ดํด ํ  ์ ์๊ฒ๋๋ค. ๋ฆฌ์กํธ๊ฐ ์ข๋ค๊ณ ๋ ํ์ง๋ง ์ข๋ค๋ ๋ง๋ง๋ฃ๊ณ , ์ ์ด๊ฒ ๋ง๋ค์ด์ก๋์ง ์ดํดํ์ง ๋ชปํ์ฑ ํ์ต์ ์์ํ๋ ์ฌ๋์ด ๊ต์ฅํ ๋ง๋ค. ๋๋ฌธ์ ์ฐ๋ฆฌ๋ ํ์ต์ ๋ฐ๋๋ผ js์ ๋ฆฌ์กํธ๋ฅผ ๋น๊ตํ๋ฉฐ ํ์ต์ ํ๊ฒ ๋  ๊ฒ์ด๋ค.

> react๋ ์น์ฌ์ดํธ์ interactivity(์ํธ์์ฉ)์ ๋ง๋ค์ด์ค๋ค.

์ด๊ฒ์ด ๋ฆฌ์กํธ๊ฐ ํด๊ฒฐํ๋ ๋ฐ๋๋ผ js์ ๋ฌธ์ ์ด๋ค.

# ๋ฐ๋๋ผ js VS ๋ฆฌ์กํธ

๋จผ์ , ๋ฐ๋๋ผ js์์, ๋ฒํผ์ ๊ฐ์งํ ๋๋ง๋ค, ์ฝ์์ ์๋ฅผ ๋ํ๋ด์ฃผ๋ ํ๋ก๊ทธ๋จ์ ์๋ ฅํด๋ณด์

```html
<body>
  <h1>Total Clicks : 0</h1>
  <button>hello world!</button>
  <script>
    const btn = document.body.querySelector("button");
    const h1 = document.body.querySelector("h1");
    let num = 0;
    function add() {
      num = num + 1;
      h1.innerText = `Total Clicks : ${num}`;
    }
    addEventListener("click", add);
  </script>
</body>
```

๋ณ๊ฑฐ ์๋ ํ๋ก๊ทธ๋จ์ด์ง๋ง ์ฝ๋์ ์์ด ์๋นํ ๋ง๋ค.
html์์ฑ -> ํ๊ทธ๋ณ์ํ -> ํจ์์์ฑ -> ์ด๋ฒคํธ๋ฆฌ์ค๋ ์์ฑ์ด๋ค.

# ๋ฆฌ์กํธ convert

์ด์  ์ด ํ๋ก๊ทธ๋จ์ ๋ฆฌ์กํธ๋ก ๋ง๋ค์ด๋ณผ๊ฒ์ด๋ค. ๊ธฐ์ตํด์ผ๋  ๊ฒ์, ๋ฆฌ์กํธ๋ js์์๋ง ์์ฑํ๊ฒ ๋๋ค. html์ js์ **๋ถ๋ฆฌ**ํ์ง ์๋๋ค. ๋ํ ์ด ๋ฆฌ์กํธ์ฝ๋๋ ์์์ฝ๋๋ก์จ, ๋ณต์กํ์ง๋ง ๋ณธ์ง์ ์์๊ฐ ์ ์๋ค.

```html
<div id="root"></div>
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<script>
  const root = document.getElementById("root");
  const makespan = React.createElement(
    "span",
    { id: "sexy", style: { color: "red" } },
    "Hello World"
  );
  ReactDOM.render(makespan, root);
</script>
```

**react**๋ ์์ง์ด๋ฉฐ
**reactDOM**์ ์์ง์ html๋ก ์ปจ๋ฒํํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด๋ค.
_?? ๋ ๊ธธ๋ค._  
์์ ์ ์ด๊ฒ์ด๋ค. ๊ธฐ์กด ์์๋ฐฉ์์ด html->js์๋ค๋ฉด ๋ฆฌ์กํธ๋js->html์ด๋ค. ๊ทธ๋ฆฌ๊ณ  ๋ฉ์ธ์ธ์ด๊ฐ ๋งํฌ์์ธ์ด์์ ํ๋ก๊ทธ๋๋ฐ์ธ์ด๊ฐ ๋๋ฉด์ ๋ ์์ ๋๊ฐ ๋์์ง ๊ฒ์ด๋ค!!

```html
<div id="root"></div>
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<script>
  let count = 0;
  const root = document.getElementById("root");
  const span = React.createElement("span", null, `Hello World! : ${count}`);
  const btn = React.createElement(
    "button",
    { onClick: () => console.log("hello world!!") },
    "Click!"
  );
  const container = React.createElement("div", null, [span, btn]);
  ReactDOM.render(container, root);
</script>
```

# jsx

์ด์  createElement๋ฅผ ์ฐ์ง ์๊ฒ ๋ค. ์ง๊ธ๊น์ง๋ ์์์ฝ๋์ด์ง๋ง ์ง๊ธ ์ค๋ชํ๋ ๊ฒ์ ในใ ๊ฐ๋ฐ์๋ค์ด ์ฐ๋๊ฒ์ด๋ค. ์ ์ด์ ์์์ฝ๋๋ฅผ ๋ค๋ฃฐ ๊ธฐํ๋ ๊ฑฐ์ ์๋ค. jsx๋ react์ฝ๋๋ฅผ **html๋ฌธ๋ฒ**์ฒ๋ผ ์ธ์ ์๊ฒ ํด์ค๋ค.

```js
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
  const root = document.getElementById("root");
  const Title = () => <h3 id="title">Hello!</h3>;
  const Btn = () => (
    <button
      style={{ backgroundColor: "tomato" }}
      onClick={() => console.log("Hello World")}
    >
      Click!!
    </button>
  );
  const Container = () => (
    <div>
      <Title />
      <Btn />
    </div>
  );
  ReactDOM.render(<Container />, root);
</script>
```

ํ๊ทธ๋ค์ ์ปดํฌ๋ํธํ ํ๊ณ , ์ปจํ์ด๋์์ ๋ถ๋ฌ์ค๊ณ , ๋ ๊ทธ ์ปจํ์ด๋๋ฅผ ๋ฃจํธdiv์ ์ง์ด๋ฃ๋ ์์์ด๋ค.
์ปดํฌ๋ํธํ html ํ๊ทธ๋ค์ ์ฒซ๊ธ์๋ฅผ ๋๋ฌธ์๋ก ์ ์ฅํด์ผ๋ง </>ํํ๋ก ํธ๋ค๋งํ  ์ ์๋ค

# state

๋งจ ๋จผ์  ๋ง๋  ํ๋ก๊ทธ๋จ์ ํด๋ฆญ์นด์ดํธ๋ฅผ HTML์  ์ถ๋ ฅํ๋ค. ๋ ์ญ์ ๋ฆฌ์กํธ์์์ ๋ณ์๋ฅผ ์์ฑํ๋๋ฐ ์ด์ฐ๋ ์๋ฌธ์ธ์ง ์คํ๋์ง ์์๋ค. ๋ณ์๋ฅผ ํธ๋ค๋งํ๋ ค๋ฉด ๋จผ์  state์ ๋ํด ์ ์ดํดํด์ผ ํ๋ค.

> state: ๊ธฐ๋ถ์ ์ผ๋ก ๋ฐ์ดํฐ๊ฐ ์ ์ฅ๋๋ ๊ณณ

์๋๋ ์ด์ ๋, ๋ฆฌ์กํธ๋์์ ๊ธฐ๋ณธ์ ์ผ๋ก html ๋ ๋๋ง์ ํ๋ฒ๋ง ํ๊ธฐ ๋๋ฌธ์ด๋ค. ๊ทธ๋์ ํด๋ฆญ์ ํ๋๋ผ๋ ์ฝ์์์์๋ ๋ณ์๊ฐ ๋ณํ์ง๋ง, UI์๋ ์ถ๋ ฅ๋์ง ์์๋ ๊ฒ์ด๋ค.

## Before

```js
const root = document.getElementById("root");
let counter = 0;
function countUp() {
  counter = counter + 1;
  render();
}
const render = () => ReactDOM.render(<Container />, root);
const Title = () => <h3 id="title">Hello! x {counter}</h3>;
const Btn = () => <button onClick={countUp}>Click!!</button>;
const Container = () => (
  <div>
    <Title />
    <Btn />
  </div>
);
render();
```

์ด๋ ๊ฒ ํด๋ฆญํ ๋๋ง๋ค ๋ ๋๋ง์ ํด์ฃผ๋ ํจ์๋ฅผ ๋ฃ๋๋ค๋ฉด, ๋๋์ด ์ฐ๋ฆฌ๊ฐ ์ํ๋ ํ๋ก๊ทธ๋จ์ด ์์ฑ๋๋ค
_??์ ๋ ๋ณต์กํด์ง์ง??_
์ฐจ์ด์ ์ด ํ๋ ๋ ์๋ค. ํด๋ฆญํ ๋๋ง๋ค, ๋ฐ๋๋ผ์์ ํ๊ทธ ์ ์ฒด๊ฐ ์ํธ์์ฉ(๊ฒ์ฌ์์ ๊น๋นก๊น๋นก)ํ์ง๋ง, **๋ฆฌ์กํธ**์์๋ ๋ฐ๋๋ ํ์คํธ ๋ถ๋ถ๋ง ์ํธ์์ฉํ๋ค. ์ ์๋ HTML์ ์ ๋ถ ๋ ๋๋งํ์ง๋ง, ํ์๋ **๊ต์ฒด๋๋ ๋ถ๋ถ**๋ง ๋ ๋๋งํ๋ค.

## After

```js
function App() {
  const [counter, setCounter] = React.useState(0); //(data,modifier)
  const onClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
```

useState๋ฅผ ์ฌ์ฉํ๋ฉด ๋ณ์(date)์ ํจ์(modifier)๋ฅผ ๋ง๋ ๋ค. ํจ์๋ฅผ ์ฌ์ฉํ๋ฉด ๊ตณ์ด ๋ฆฌ๋ ๋๋ง์ ํ  ํ์๊ฐ ์์ผ๋ฉฐ ๋ง์ฐฌ๊ฐ์ง๋ก ๊ต์ฒด๋๋ ๋ถ๋ถ๋ง ์๋ฐ์ดํธ ํ  ์ ์๋ค.

## state Functions

์  ์ฝ๋์ ๊ฐ์ด 0์ ๋ฃ์๊ณ  **ํ์ฌ๊ฐ์ ๊ธฐ์ค**์ผ๋ก state๋ฅผ ํธ๋ค๋งํ๋ ค๋ฉด
`setCounter(counter + 1);` ์ด๋ถ๋ถ์ `setCounter((cur) => cur + 1);`๋ก ๋ฐ๊ฟ์ฃผ๋ฉด ๋๋ค. ๋ฌผ๋ก  ๋๋ค ๋์ผํ ์ฝ๋์ด๋ค.

## input : min -> hours

์ด๋ฒ์๋ **์๋ ฅ๊ฐ์ ๊ธฐ์ค**์ผ๋ก ํธ๋ค๋งํ๋ ๋ฐฉ๋ฒ์ ์์๋ณธ๋ค.

```js
function App() {
  const [minutes, setMinutes] = React.useState();
  const onChange = (event) => setMinutes(event.target.value);
  const reset = () => setMinutes(0);
  return (
    <div>
      <h1>Convert!</h1>
      <div>
        <label htmlfor="minutes">Minutes</label>
        <input
          value={minutes} //๋ณ์ํ ๋น target์ด ๋๋ ๋ณ์
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlfor="hours">Hours</label>
        <input
          value={minutes / 60}
          id="hours"
          placeholder="hours"
          type="number"
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
```

```js
const onChange = (event) => setMinutes(event.target.value);
```

๋ถ๋ถ์ด ๋ณํ๊ฐ ์์๋๋ง๋ค ์๋ ฅ๊ฐ์ ๊ธฐ์ค์ผ๋ก modifier์ ์๋์์ผ์ฃผ๋ ํจ์์ด๋ค.

### flip

```js
function App() {
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
        <label htmlfor="minutes">Minutes</label>
        <input
          value={flipped ? amounts * 60 : amounts}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlfor="hours">Hours</label>
        <input
          value={flipped ? amounts : amounts / 60}
          id="hours"
          placeholder="hours"
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
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
```

๋ํ, ์ด๋ฐ์์ผ๋ก state๋ฅผ ๋ถ๋ฆฐ๊ฐ์ผ๋ก ์ค์ ํด ์ด๋ฐ์์ผ๋ก ๋ง๋ค์๋ ์๋ค. ์~ ์ธํฐ๋ํฐ๋ธํด๋ผ~~

# Properties

> Props : ์ผ์ข์ ๋ฐฉ์์ด๋ฉฐ, ๋ถ๋ชจ์ปดํฌ๋ํธ๋ก๋ถํฐ ์์์ปดํฌ๋ํธ์ ๋ฐ์ดํฐ๋ฅผ ๋ณด๋ผ ์ ์๊ฒ ํด์ฃผ๋ ๋ฐฉ๋ฒ

```js
function Btn(props) {
  // ={text,big}
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: props.big ? "20px" : "10px",
      }}
    >
      {props.text}
    </button>
  );
}
function App() {
  return (
    <div>
      <Btn text="login" big={true} />
      <Btn text="join" />
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
```

์ด๋ฌํ ํํ๋ก Btn์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฌ์ฉํ๋ ๋์์ html์ ์ผ๋ถ๋ถ๋ง ๊ต์ฒดํด์ ์ด์ฉํ  ์๋ ์๋ค.

```js
function Btn({ text, changeVal }) {
  return (
    <button
      onClick={changeVal}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {text}
    </button>
  );
}
function App() {
  const [val, setVal] = React.useState("login");
  const changeVal = () => setVal("Revert Changes");
  return (
    <div>
      <Btn text={val} changeVal={changeVal} />
      <Btn text="join" />
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
```

props์ function๋ ๋ณด๋ผ ์ ์๋ค. ์ด๊ฒ์ JSX๋ก html ํ๊ทธ ์์ฒด์ ์ด๋ฒคํธ ๋ฆฌ์ค๋๋ฅผ ๋ฃ๋๊ฒ๊ณผ๋ ์ ํ ๋ค๋ฅธ ๊ฒ์ด๋ค.
๊ทธ์  ์ด๋ฒคํธ๋ฅผ ์คํ์ํค๋ ํจ์๊ฐ ํ๋กํผํฐ๋ก ๋ค์ด๊ฐ ๊ฒ์ด๋ค. prop์ ๊ทธ๋ฅ ๋ถ๋ชจ์์ ์์์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ๋๊ธธ ๋ ์ฌ์ฉํ๋ argument์ ์ญํ ์ด๊ธฐ๋๋ฌธ์ด๋ค.

## Memo

App()์์, ๋ฆฌํด๋ฌธ์ ๋ฒํผ์ด ๋๊ฐ๊ฐ ์๊ธฐ๋๋ฌธ์ ๋ ๋๋ง์ด ๋์์ ๋๋ค. ์ฐ๋ฆฌ๊ฐ ์ง๊ธ ํ  ๊ฒ์ ์ต์ ํ ๊ธฐ์ ๋ก, ๊ต์ฒด๋๋ ๋ถ๋ถ๋ง ๋ ๋๋งํ ์ ์๋๋ก ์ฝ๋๋ฅผ ์์ฑํ  ๊ฒ์ด๋ค.
before

```js
function Btn({ text, changeVal }) {
  console.log(text, "was renderd");
  return (
    <button
      onClick={changeVal}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {text}
    </button>
  );
}
const MemorizedBtn = React.memo(Btn);
function App() {
  const [val, setVal] = React.useState("login");
  const changeVal = () => setVal("Revert Changes");
  return (
    <div>
      <MemorizedBtn text={val} changeVal={changeVal} />
      <MemorizedBtn text="join" />
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
```

`const MemorizedBtn = React.memo(Btn);`๋ฅผ ์์ฑํ ํ๊ทธ๋ฅผ ์ด ๋ณ์๋ช์ผ๋ก ํด์ฃผ๋ฉด ๋ฆฌํด๋ฌธ ์์์๋ ํด๋น๋๋ ํ๊ทธ๋ง ์๋ฐ์ดํธ ๋๋ ๊ฒ์ ์ ์ ์๋ค. ์ด๋ฅผ ํตํด ์๋๋ฅผ ๋์ผ ์ ์๋ค.

## Types

`npm i prop-types` 1.๋ฆฌ์กํธ๋ ํ๋ผ๋ฏธํฐ๋ฅผ ์ ๋ชป ์ ์กํด์ ํ์ธํ  ์ ์๋ ๋ฌธ์ ์ ์ด ์กด์ฌํ๋ค. 2. ์ด๋ฐ ๋ฌธ์ ๋ฅผ PropTypes๋ผ๋ ๋ชจ๋์ ์ด์ฉํด ํด๊ฒฐํ  ์ ์๋ค. 3. ์ง์ ํ type๊ณผ ๋ค๋ฅด๊ฒ ์๋ ฅ ๋์๋ค๋ฉด, warning์ ์ถ๋ ฅํ๊ณ , parameter ์ ๊ฐ์ ๋ฃ์ง ์๋ ๊ฒฝ์ฐ ๊ฒฝ๊ณ  ๋ฉ์์ง๋ฅผ ๋์ธ์ ์๋ค.  
ps.ts๋ฅผ ์ด์ฉํ๋ฉด ์ด๋ฐ์ผ์ ๋ฏธ์ฐ์ ๋ฐฉ์ง ํ  ์ ์๋ค.

# Create React App

์ด์ ๊น์ง ์คํฌ๋ฆฝํธ์ ๋ฆฌ์กํธ ์ฃผ์๋ฅผ ๋ฃ์ด importํ๋ค. ์ด์  ํ๋กํ์๋ํ๊ฒ ์ง์ ์ค์นํด์ ์์ ํ  ๊ฒ์ด๋ค.
`npx create-react-app react-learn(๋ง๋ค๊ณ  ์ถ์ ์ฑ ์ด๋ฆ)`
์ด์  ์๋์์ฑ๋ ์ง์๋๋ค ใ ใ 
package.json์ ์คํฌ๋ฆฝํธ์ ์๋ start๋ฅผ ํตํด์ ์๋ฒ๋ฅผ ๋ง๋ค ์ ์๋ค.

## css import

๋ฆฌ์กํธjs์ css๋ฅผ ๋ถ๋ฆฌํด์ ์ฌ์ฉํ  ๊ฒ์ธ๋ฐ, ์ด์  css์ ํ์ผ๋ช์ filname.module.css๋ก ์ ์ฅํด์ผํ๋ค. ๊ทธ๋ฆฌ๊ณ  jsx์ ํด๋์ค๋ค์์ ํตํด์ css->js๋ก ์ด๋ํ๊ฒ ๋๋ค. ์ด๋ ๊ต์ฅํ ํธ๋ฆฌํ ๋ฐฉ์์๋๋ค.

# Effect

APIํธ์ถ๊ณผ ๊ฐ์ ํน์ ์ฝ๋๋ค์ด ํ๋ฒ๋ง ์คํ๋๊ณ  ๋์ด์ ์คํ๋์ง ์๋๋ก ์ ํํ  ๊ฒ์ด๋ค.

```js
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(counter + 1);
  console.log("always");
  useEffect(() => console.log("onetime"), []);
  return (
    <div>
      <h1 className={styled.title}>welcome back!{counter}</h1>
      <button onClick={onClick}> CLick!!!!</button>
    </div>
  );
}
```

useEffect์์ ์ฝ๋๋ฅผ ๋ฃ์ผ๋ฉด ๋ฆฌํด์ด ๋ฐ๋ณต๋์ด๋, ๋ฆฌํ๋ ์ฌ๋์ง ์๋ ์ด์ ์คํ๋์ง ์๋๋ค.
`useEffect(() => console.log("onetime"), []);` ์ฌ๊ธฐ์ ๋๋ฒ์งธ ์ธ์์ธ []์ ์ด๋ค ๊ธฐ๋ฅ์ ํ๋๊ฑธ๊น?

```js
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
```

์์๋ก ๊ฒ์๋ฐ๋ฅผ ๋ง๋ค์ด ๋ณด์๋ค. ๋ณด๋ฉด ์๊ฒ ์ง๋ง []์์ ๋ณ์์ ๋ณํ๊ฐ ์์๋์๋ง ํจ์๋ฅผ ์คํ์ํจ๋ค. ๋น์ด์๋ค๋ฉด, ๋น์ฐํ ๋ณํ๊ฐ ์์๋ฆฌ๋ ์๋ค.

# Clean Up Function

์ง๊ธ๊น์ง์ ์ฝ๋๋ค์ ์ปดํฌ๋ํธ๊ฐ ์คํ๋๋ฉด์ ์์๋๋ค. ๋ง์ฝ ์ปดํฌ๋ํธ๊ฐ ํ๊ดด๋์์๋๋ ์คํ๋๋ค๋ฉด ์ด๋จ๊น?

```js
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
```

```js

```

```js

```

```js

```

```js

```

```js

```

# ์ฝ์๋ก๊ทธ ๋๋ฒ์ฐํ๋

[์ฝ์๋ก๊ทธ ๋๋ฒ์ฐํ๋.](https://velog.io/@sweet_pumpkin/%EB%AC%B4%EC%9E%91%EC%A0%95-%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0-%EC%95%84%EB%8B%88-%EC%99%9C-%EC%BD%94%EB%93%9C%EA%B0%80-%EB%91%90-%EB%B2%88-%EC%B6%9C%EB%A0%A5%EB%90%98%EB%8A%94-%EA%B1%B4%EB%8D%B0-React-StrictMode)

```toc


```
