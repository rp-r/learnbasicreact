
import { use, useState } from 'react'
import './assets/scss/App.scss'
import Counter from './Components/Counter';

interface Post
{
  id:number;
 title:string;
 likes:number;
}


function App() {
  
   const [count,setCount]= useState(0);
   const [msg,setMsg]=useState('Hi Mom');

  const [salary,setSalary]=useState(10);

  const [showSalary,setShowSalary]=useState(false);
   



  const handleSal=(sal:number)=>

    {


      if(salary+sal<5)
      {
        setSalary(5)
        return
      }

      setSalary(salary+sal)
    }
  //Conditional redendering

  
   const [obj,setObject]=useState<Post[]>([
    {id:1,title:'React Rocks 🚚',likes:34},
    {id:2,title:'JSX Rocks Even Moar 🚜!',likes:34},
        {id:3,title:'Bye 🚆',likes:34},
          {id:4,title:'where 🚄',likes:34},
   ])

 




   console.log("App is rendering..")
  return (
    <div className='container py-5 pt-5 bg-light'>
      <h1>02-react-basics</h1>
   
      <Counter /> 
      <Counter /> 
     
    
      <hr />
      
       <p>Message :{msg}</p>
      <button className='btn btn-warning' onClick={()=>setMsg('Hi Dad')}> Display</button>
     <hr />

     <ul>{obj.map(ob=><li key={ob.id}>{ob.title} ({ob.likes}<button >❤</button> likes)</li>
          )}
      
      </ul>
      <hr/>

<button
 onClick={()=>setShowSalary(!showSalary)}
  className=
  
  { showSalary?'btn btn-success p-2 ':'btn btn-danger p-2 '}
  
  >{ showSalary?'Hide  ':'Show '} Salary
  </button>

<hr/>
{showSalary &&(<><h1> Salary </h1>    
 
      <p> Salary per hour :{salary} &euro;</p>

          { salary<10 &&(<div className='alert alert-warning'> You want to change the job</div>)}

      <div className="buttons">
        <div className="mb-1">
          <button className="btn btn-primary btn-lg" onClick={()=>handleSal(1)}>
            Rasie 1 &euro;😀
          </button>

          <button className="btn btn-warning btn-lg" onClick={()=>handleSal(-1)
          
          } disabled={salary===5}>
            Decrease 1 &euro;😂
          </button>
          <hr />
          <div className="mb-1">

            <button className="btn btn-primary btn-lg" onClick={()=>handleSal(5)}>
              Rasie 5 &euro;😀😀😀
            </button>

            <button className="btn btn-warning btn-lg" onClick={()=>handleSal(-5)} disabled={salary===5}>
            Decrease 5 &euro;😂😂😂😂😂

            </button>
          </div>
        </div>
      </div>
      </>)}






      
    </div>
  )
}

export default App
