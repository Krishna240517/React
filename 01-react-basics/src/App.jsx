import { useState } from 'react';
import './App.css'
function App() {
  const[count, setCount] = useState(10);
  const[error, setError] = useState('');
  function onClickUp(){
    if(count + 1 > 20){
      setError('Limit : 20 reached');
    } else {
      setCount(count + 1);
      setError('');
    }
  }
  function onClickDown(){
    if(count - 1 < 0){
      setError('Cannot Hit Negative Number')
    } else {
      setCount(count - 1);
      setError(''); 
    }
  }
  return(
    <>
      <h1>KRISHNA REACTS</h1>
      <Content count={count}/>
      {error && <p style={{color : "red"}}>{error}</p>}
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
