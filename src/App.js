// import React from 'react';
// import "./App.css";

import { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react"


// const App = () => {
 
//   return (
//     <div>
//       <div className='parent'>
//       <form>
//         <div>
//           Assigned to
//         </div>
//         <div>
//           <input type='text'/>
//         </div>
//         <div>start Date</div>
//         <div><input type='Date'/></div>
//         <div>End Date</div>
//         <div><input type='Date'/></div>
//         <div>Priority</div>
//         <span><input type='radio'/>High</span>
//         <span><input type='radio'/>Avg</span>
//         <span><input type='radio'/>Low</span>
//         <div>Description</div>
//         <div><input type='text'/></div>
//         <button className='btn1'>Submit</button>
//         <button className='btn2'>Clear</button>

//       </form>
//       </div>
      
//           </div>
      
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   function sum()
//   {
//     var a = parseInt(document.getElementById("first").value);
//     var b = parseInt(document.getElementById("second").value);
//     document.getElementById("box").innerHTML = a+b;

//   }
//   function sub()
//   {
//     var a = parseInt(document.getElementById("first").value);
//     var b = parseInt(document.getElementById("second").value);
//     document.getElementById("box").innerHTML = a-b;

//   }
//   function Mul()
//   {
//     var a = parseInt(document.getElementById("first").value);
//     var b = parseInt(document.getElementById("second").value);
//     document.getElementById("box").innerHTML = a*b;

//   }

//   return (
//     <div>
//     <div>Enter the Value of a
//     </div>
//     <input type='text' id='first'/>
//     <div>Enter the Value of b
//     </div>
//     <input type='text' id='second'/>
//     <button onClick={sum}>check output(+)</button>
//     <button onClick={sub}>check output(-)</button>
//     <button onClick={Mul}>check output(*)</button>
//     <div id='box'></div>

//     </div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   let count =0;
//   function increase()
//   {
    
//     count = count+1;
//     console.log(count);
//   }
//   function reset()
//   {
//     count = 0;
//     console.log(count);
//   }
//   function decr()
//   {
    
//     count = count-1;
//     console.log(count);
//   }
//   return (
//     <div>
//       <h1></h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decr}>-</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App
// + = > used to  increase the count by 1 
// - = > used to  decr the count by 1 
// reset used to reset the count count = 0;
// import React from 'react'

// const App = () => {
//   function age()
//   {
//     var age = document.getElementById("age").value;
//     if(age>=18)
//     {
//       alert("yes")
//     }
//     else
//     {
//       alert("not")
//     }
//   }
//   return (
//     <div>
//       <div>
//         <input type='text' id='age'/>
//         <button onClick={age}>check age</button>
//       </div>
//     </div>
//   )
// }

// export default App
// function App()
// {
//   return(
//     <>
//     <h1>this is heading</h1>
//     </>
//   )
// }
// export default App;
// import React from "react";
// class App extends React.Component()
// {
//   render()
//   {
//     return 
//     (
//       <>
//       <h1>this is heading</h1>
//       </>
//     )
//   }

// }
// export default App;
// how to creates the function based 
// function App()
// {
//   var fruit = ["apple","mango","orange","peach","strawberry"];
//   return(
  
//     <>
//     {console.log(fruit.length,fruit)};
//         {fruit.map((i,key)=><p key = {key}>{i}</p>)}
//     </>
    
//   )
// }
// export default App;
// import React from 'react'

// const App = () => {
//   var data = ["sumesh","rahul","Amit","kapil"];

//   return (
//     <>
//     {/* <div>{data.map((a)=>{a})}</div> */}
//     <div>{data.map((fruit)=><><p>{fruit}</p>
//     </>)}</div>
   
//     </>

//   )
  
// }

// export default App
// import React from 'react'

// const App = () => {
//   const data = [
//     {name:"sumesh",id:"2022"},
//     {name:"rahul",id:"2023"},
//     {name:"Kapil",id:"2034"}
//   ]
//   return (
//     <div>
//       {data.map((fruit,key)=><>
//       <p key={key}>{fruit.name}</p>
//       <p>{fruit.id}</p>
//       </>)}
//     </div>
//   )
// }

// export default App
// import React from 'react'


// const App = () => {
//   const data = [
//     {name:"sumesh",id:"2022",roll:23},
//     {name:"rahul",id:"2023",roll:34},
//     {name:"Kapil",id:"2034",roll:45},
//     {name:"Amit",id:"2024",roll:23},
// {name:"Sumit",id:"2032",roll:23443},
// {name:"kaku",id:"2045",roll:23},
// {name:"amitji",id:"203221",roll:50},
// {name:"Sunita",id:"3045",roll:45}
// ]

//   return (
//     <div>
//      {data.map((fruit,key)=><p key ={key}>{fruit.name}</p>)}
//     </div>
//   )
// }
// export default App
// import React from 'react'
// import Home from './Home'
// import Profile from './Profile'

// const App = () => {
//   return (
//     <div>
//      <Profile text = "hello world"/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Profile from './Profile'
// import Home from "./Home"

// const App = () => {
//   return (
//     <div>
//       <Profile text = "hello my name is rohit"/>
//       <Home text="this your home pages"/>
//     </div>
//   )
// }

// export default App
// import React from 'react'

// import Prop from './Prop'

// const App = () => {
//   return (
//     <div>
//      <Prop name="sumesh"/>

//     </div>
//   )
// }

// export default App
// import React from "react";
// class App extends React.Component
// {
//   constructor(props)
//   {
//     this.state = 
//     {
//       name:"sumesh",
//       lname:"sharma",
//       roll:343
//     }
//   }
 
//   render()
//   {
//     return(
//       <>
//       <div>
//         <h1>{this.state.name}</h1>
//       </div>
//       </>
//     )
//   }
// }
// export default App;
// import React from "react";
// class App extends React.Component
// {
//   constructor(props)
//   {
//     this.state = 
//     {
//       name:"sumesh",
//       lname:"sharma",
//       roll:343
//     }
//   }
//   render()
//   {
//     return
//     (
//       <>
//       <h1>{this.state.name}</h1>
//       <h2>{this.state.lname}</h2>
//       </>
//     )
//   }
// }
// export default App;
// hookes in react :- 
// hookes are comes in 16.8 version the main use of is acces the state and other features of react 
// useState
// useEffect
// useRef
// useReducer
// useCallback
// useMemo
// useContext
// import React from 'react'
// // import { useState } from "react"

// const App = () => {
//   const [data,setdata] = useState(0);
//  const increase = ()=>{
//   setdata(data+1)
//  }
//   const decrease = ()=>{
//     setdata(data-1);
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   )
// }

// export default App
import React from 'react'

const App = () => {
  const [input,setinput] = useState(0);
  const increase = ()=>{
    setinput(input+1);
  }
  const decrease = ()=>{
    setinput(input-1);

  }
  const reset = ()=>{
    setinput(0)
  }


  return (
    <div>
      {input}
      <button onClick={increase}>click(+)</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App


