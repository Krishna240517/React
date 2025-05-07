import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0);
  const[error,setError] = useState('');
  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(function(count){
        if(count >= 10){
          clearInterval(id);
          setError('Cannot take counter more than 10'); //clear when reaching limit
          return 0;
        } else {
          setError('');
          return count + 1; 
        }
      })
    },1000)
    return ()=> clearInterval(id);  //cleanup on unmount  
  },[]);


  return(
    <>
      <Content count={count}/>
      {error && <p style={{color : "red"}}>{error}</p>}
    </>
  )
}

function Content(props){
  return(
  <h1>{props.count}</h1>
  );
}

export default App
