import { useState } from 'react';
import './App.css'
function App() {
  const[count, setCount] = useState(0);

  function onClickHandler(){
    setCount(count + 1);
  }

  return(
    <Button onClick={onClickHandler} count={count}/>
  );
}
function Button(props){
  return(
    <button onClick={props.onClick}>Counter {props.count}</button>
  )
}
export default App
