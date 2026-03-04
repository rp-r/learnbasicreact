
import { use, useState } from 'react'
import './assets/scss/App.scss'

interface Post
{
  id:number;
 title:string;
 likes:number;
}


function App() {
  
   const [count,setCount]= useState(0);
   const [msg,setMsg]=useState('Hi Mom');

   const [obj,setObject]=useState<Post[]>([
    {id:1,title:'React Rocks 🚚',likes:34},
    {id:2,title:'JSX Rocks Even Moar 🚜!',likes:34},
        {id:3,title:'Bye 🚆',likes:34},
          {id:4,title:'where 🚄',likes:34},
   ])

    const handlebtnClick=()=>
   {
    setCount(count+1);
   }
   console.log("App is rendering..")
  return (
    <div className='container py-5 pt-5 bg-light'>
      <h1>02-react-basics</h1>
      <p> Counter: {count}</p>
     
      <button onClick={handlebtnClick} className='btn btn-primary' > Click me!  </button>
      <hr />
      
       <p>Message :{msg}</p>
      <button className='btn btn-warning' onClick={()=>setMsg('Hi Dad')}> Display</button>
     <hr />

     <ul>{obj.map(ob=><li key={ob.id}>{ob.title} ({ob.likes}<button >❤</button> likes)</li>
          )}
      
      </ul>
      <hr/>

      <h2> Salary per hour :SALARY £</h2>
      <div className="buttons">
        <div className="mb-1">
          <button className="btn btn-primary btn-lg">
            Rasie 2 &euro;😀
          </button>

          <button className="btn btn-warning btn-lg">
            Decrease 2 &euro;😂
          </button>
          <hr />
          <div className="mb-1">

            <button className="btn btn-primary btn-lg">
              Rasi 5 &euro;😀😀😀
            </button>

            <button className="btn btn-warning btn-lg">
            Decrease 5 &euro;😂😂😂😂😂

            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
