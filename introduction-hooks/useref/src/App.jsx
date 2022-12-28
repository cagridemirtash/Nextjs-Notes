import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useState } from 'react';

function App() {
  let ref = useRef(0)
  function handleClick() {
    ref.current = ref.current + 1
    alert(`This is the current value of ref : ${ref.current}`)
  }
  return (
   <>
    <button onClick={handleClick}>Click bro</button> 
   </>
  );
}

export default App;
