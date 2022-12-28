import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0)

  return (
    <>
      <h1>Hello This is a increment count with useState hooks</h1>
      <h1>{state > 0 && state}</h1>
      <button onClick={() => setState(state + 1)}>Arttir</button>
      <button onClick={() => setState(state - 1)}>Azalt</button>
    </>
  );
}

export default App;
