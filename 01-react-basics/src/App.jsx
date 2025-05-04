import { useState } from 'react';
import './App.css'
function App() {
  const[countUp,setCountUp] = useState(0);
  const[countDown, setCountDown] = useState(10);

  function onClickUpHandler(){
    setCountUp(countUp + 1);
  }
  function onClickDownHandler(){
    setCountDown(countDown - 1);
  }

  return(
    <div>
      <ButtonUp onClick={onClickUpHandler} count={countUp}></ButtonUp>
      <ButtonDown onClick={onClickDownHandler} count={countDown}></ButtonDown>
    </div>
  )
}

function ButtonUp(props){
  return(
    <button onClick={props.onClick}>Counter {props.count}</button>
  )
}
function ButtonDown(props){
  return(
    <button onClick={props.onClick}>Counter {props.count}</button>
  ) 
}
export default App
