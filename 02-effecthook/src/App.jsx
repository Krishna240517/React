import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0);

  function increaseCounter(){
    setCount(count + 1);
  }
  return(
    <Content count={count}/>
  )
}

function Content(props){
  <h1>{props.count}</h1>
}

export default App
