---
emoji: 🤔
title: 리액트 공부를 시작하면서
date: "2022-06-28"
author: AsanHo
tags:
categories: react
---

# 리액트는 왜 개발되었는가

기술은 문제를 해결하기 위해 개발된다. 그리고 해결하기 위한 문제가 무엇인지 안다면, 그 기술을 더 잘 이해 할 수 있게된다. 리액트가 좋다고는 하지만 좋다는 말만듣고, 왜 이게 만들어졌는지 이해하지 못한채 학습을 시작하는 사람이 굉장히 많다. 때문에 우리는 학습시 바닐라 js와 리액트를 비교하며 학습을 하게 될 것이다.

> react는 웹사이트에 interactivity(상호작용)을 만들어준다.

이것이 리액트가 해결하는 바닐라 js의 문제이다.

# 바닐라 js VS 리액트

먼저, 바닐라 js에서, 버튼을 감지할때마다, 콘솔에 수를 나타내주는 프로그램을 입력해보자

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

별거 아닌 프로그램이지만 코드의 양이 상당히 많다.
html작성 -> 태그변수화 -> 함수작성 -> 이벤트리스너 작성이다.

# 리액트 convert

이제 이 프로그램을 리액트로 만들어볼것이다. 기억해야될 것은, 리액트는 js에서만 작성하게 된다. html을 js와 **분리**하지 않는다. 또한 이 리액트코드는 원시코드로써, 복잡하지만 본질을 알아갈 수 있다.

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

**react**는 엔진이며
**reactDOM**은 엔진을 html로 컨버팅해주는 라이브러리이다.
_?? 더 길다._  
요점은 이것이다. 기존 작업방식이 html->js였다면 리액트는js->html이다. 그리고 메인언어가 마크업언어에서 프로그래밍언어가 되면서 더 자유도가 높아진 것이다!!

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

이제 createElement를 쓰지 않겠다. 지금까지는 원시코드이지만 지금 설명하는 것은 ㄹㅇ 개발자들이 쓰는것이다. 애초에 원시코드를 다룰 기회는 거의 없다. jsx는 react코드를 **html문법**처럼 쓸수 있게 해준다.

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

태그들을 컴포넌트화 하고, 컨테이너에서 불러오고, 또 그 컨테이너를 루트div에 집어넣는 순서이다.
컴포넌트한 html 태그들은 첫글자를 대문자로 저장해야만 </>형태로 핸들링할 수 있다

# state

맨 먼저 만든 프로그램은 클릭카운트를 HTML애 출력했다. 나 역시 리액트안에서 변수를 생성했는데 어찌된 영문인지 실행되지 않았다. 변수를 핸들링하려면 먼저 state에 대해 서 이해해야 한다.

> state: 기분적으로 데이터가 저장되는 곳

안되는 이유는, 리액트돔에서 기본적으로 html 렌더링은 한번만 하기 때문이다. 그래서 클릭을 하더라도 콘솔상에서는 변수가 변하지만, UI에는 출력되지 않았던 것이다.

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

이렇게 클릭할때마다 렌더링을 해주는 함수를 넣는다면, 드디어 우리가 원했던 프로그램이 완성된다
_??왜 더 복잡해지지??_
차이점이 하나 더 있다. 클릭할때마다, 바닐라에서 태그 전체가 상호작용(검사에서 깜빡깜빡)하지만, **리액트**에서는 바뀌는 텍스트 부분만 상호작용한다. 전자는 HTML을 전부 렌더링하지만, 후자는 **교체되는 부분**만 렌더링한다.

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

useState를 사용하면 변수(date)와 함수(modifier)를 만든다. 함수를 사용하면 굳이 리렌더링을 할 필요가 없으며 마찬가지로 교체되는 부분만 업데이트 할 수 있다.

## state Functions

전 코드와 같이 0을 넣었고 **현재값을 기준**으로 state를 핸들링하려면
`setCounter(counter + 1);` 이부분을 `setCounter((cur) => cur + 1);`로 바꿔주면 된다. 물론 둘다 동일한 코드이다.

## input : min -> hours

이번에는 **입력값을 기준**으로 핸들링하는 방법을 알아본다.

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
          value={minutes} //변수할당 target이 되는 변수
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

부분이 변화가 있을때마다 입력값을 기준으로 modifier을 작동시켜주는 함수이다.

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

또한, 이런식으로 state를 불린값으로 설정해 이런식으로 만들수도 있다. 아~ 인터랙티브해라~~

# Properties

> Props : 일종의 방식이며, 부모컴포넌트로부터 자식컴포넌트에 데이터를 보낼 수 있게 해주는 방법

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

이러한 형태로 Btn컴포넌트를 재사용하는 동시에 html의 일부분만 교체해서 이용할 수도 있다.

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

props에 function도 보낼 수 있다. 이것은 JSX로 html 태그 자체에 이벤트 리스너를 넣는것과는 전혀 다른 것이다.
그저 이벤트를 실행시키는 함수가 프로퍼티로 들어간 것이다. prop은 그냥 부모에서 자식으로 데이터를 넘길 때 사용하는 argument의 역할이기때문이다.

## Memo

App()에서, 리턴문에 버튼이 두개가 있기때문에 렌더링이 동시에 된다. 우리가 지금 할 것은 최적화 기술로, 교체되는 부분만 렌더링할수 있도록 코드를 작성할 것이다.
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

`const MemorizedBtn = React.memo(Btn);`를 작성후 태그를 이 변수명으로 해주면 리턴문 안에서도 해당되는 태그만 업데이트 되는 것을 알 수 있다. 이를 통해 속도를 높일 수 있다.

## Types

`npm i prop-types` 1.리액트는 파라미터를 잘 못 전송해서 확인할 수 없는 문제점이 존재한다. 2. 이런 문제를 PropTypes라는 모듈을 이용해 해결할 수 있다. 3. 지정한 type과 다르게 입력 되었다면, warning을 출력하고, parameter 에 값을 넣지 않는 경우 경고 메시지를 띄울수 있다.  
ps.ts를 이용하면 이런일을 미연에 방지 할 수 있다.

# Create React App

이전까지 스크립트에 리액트 주소를 넣어 import했다. 이제 프로페셔널하게 직접설치해서 작업 할 것이다.
`npx create-react-app react-learn(만들고 싶은 앱 이름)`
이제 자동완성도 지원된다 ㅠㅠ
package.json의 스크립트에 있는 start를 통해서 서버를 만들 수 있다.

## css import

리액트js와 css를 분리해서 사용할 것인데, 이제 css의 파일명을 filname.module.css로 저장해야한다. 그리고 jsx의 클래스네임을 통해서 css->js로 이동하게 된다. 이는 굉장히 편리한 방식입니다.

# Effect

API호출과 같은 특정코드들이 한번만 실행되고 더이상 실행되지 않도록 제한할 것이다.

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

useEffect안에 코드를 넣으면 리턴이 반복되어도, 리프레쉬되지 않는 이상 실행되지 않는다.
`useEffect(() => console.log("onetime"), []);` 여기서 두번째 인자인 []은 어떤 기능을 하는걸까?

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

임의로 검색바를 만들어 보았다. 보면 알겠지만 []안의 변수에 변화가 있을때에만 함수를 실행시킨다. 비어있다면, 당연히 변화가 있을리도 없다.

# Clean Up Function

지금까지의 코드들은 컴포넌트가 실행되면서 시작된다. 만약 컴포넌트가 파괴되었을때도 실행된다면 어떨까?

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

# 콘솔로그 두번찍힐때

[콘솔로그 두번찍힐때.](https://velog.io/@sweet_pumpkin/%EB%AC%B4%EC%9E%91%EC%A0%95-%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0-%EC%95%84%EB%8B%88-%EC%99%9C-%EC%BD%94%EB%93%9C%EA%B0%80-%EB%91%90-%EB%B2%88-%EC%B6%9C%EB%A0%A5%EB%90%98%EB%8A%94-%EA%B1%B4%EB%8D%B0-React-StrictMode)

```toc


```
