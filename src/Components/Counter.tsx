import { useState } from "react";
import '../assets/scss/App.scss'


const Counter=()=>
{
  const [count,setCount]= useState(0);

   const handlebtnClick=()=>{
   console.log("Counter before update",count)//0
    //setCount(count+1);
    setCount((preval)=> {return preval+1;}) // preval= 0 reture 1
    console.log("Counter between  updates",count)//0
       //setCount(count+1);
     setCount((preval)=> {return preval+1;})// preval= 1 reture 2
    console.log("Counter after updtae",count)//0
   }


    return (
    < div className="counter">
    
    <p> Counter: {count}</p>
    <button onClick={handlebtnClick} className='btn btn-primary' > Click me!  </button></div>)
}


export default Counter;