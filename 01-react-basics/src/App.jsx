import { useState } from 'react';
import './App.css'
function App() {
  const[count, setCount] = useState(10);
  function onClickUp(){
    setCount(count + 1);
  }
  function onClickDown(){
    setCount(count - 1);
  }
  return(
    <>
      <h1>KRISHNA REACTS</h1>
      <Content count={count}/>
      <button onClick={onClickUp}>Increase Counter</button>
      <br />
      <button onClick={onClickDown}>Decrease Counter</button>
    </>
  )
}

function Content(props){
  return(
    <h2>Counter: {props.count}</h2>
  )
}
export default App
