import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  function increment() {
    setState(state + 1);
  }

  function decrement() {
    if (state === 0) {
      console.log("Daha fazla azaltamazsınız");
      return;
    }
    setState(state - 1);
  }
  //TODO : Fix with input data
  function multiply() {
    setState(state * 5);
  }

  function reset() {
    setState(1);
  }

  return (
    <>
      <h1>Hello This is a increment count with useState hooks</h1>
      <h1>{state > 0 && state}</h1>
      <button onClick={increment}>Arttir</button>
      <button onClick={decrement}>Azalt</button>
      <button onClick={reset}>Sıfırla</button>
      <hr />
      <button onClick={multiply}>Çarp</button>
    </>
  );
}

export default App;
