import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0);

  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(function(count){
        if(count >= 10){
          clearInterval(id); //clear when reaching limit
          return 0;
        } else {
          return count + 1; 
        }
      })
    },1000)
    return ()=> clearInterval(id);  //cleanup on unmount
  },[]);


  return(
    <Content count={count}/>
  )
}

function Content(props){
  return(
  <h1>{props.count}</h1>
  );
}

export default App
