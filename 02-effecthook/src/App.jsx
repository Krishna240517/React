import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[vis, setVis] = useState(true);
  useEffect(()=>{
    const id = setInterval(()=>{
      setVis(c => !c);
    },5000)
    return ()=>clearInterval(id);
  },[])
  return(
    <>
      {vis && <Counter></Counter>}
    </>
  )
}


function Counter(){
  const [count,setCount] = useState(0);
  const [error,setError] = useState('');

  //no dependency array
  useEffect(()=>{
    const id = setInterval(()=>{
      if(count + 1 > 10){
        setError("Cannot Exceed More than 10")
        clearInterval(id);
      } else {
        setCount(count => count + 1);
        setError("");
      }
    },1000)

    return () => clearInterval(id);
  },[]);


  return(
    <>
      {error && <p style={{color : "red"}}>{error}</p>}
      <h1>{count}</h1>
    </>
  )
}
export default App
