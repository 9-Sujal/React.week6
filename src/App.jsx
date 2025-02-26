import { useEffect, useState } from "react"
import axios from 'axios';




function App() {
  


//  useEffect(()=>{
//  axios.get('https://dummyjson.com/todos')
//  .then(function(response){
//   console.log("fetched", response.data)
//   setTodos(response.data.todos)
//  })
//  .catch(error=> console.log("error fetching data", error));
// },[]);

const [Id,setId] = useState(0);

  return (
    <>
    {/* {todos.map(todo =>
      (<Todo key={todo.id} title={todo.todo}/>))}
   <h1>hello</h1> */}

<button onClick={()=> setId(1)}> todo 1</button>

<button onClick={()=> setId(2)}> todo 2</button>

<button onClick={()=> setId(3)}> todo 3</button>

<button onClick={()=> setId(4)}> todo 4</button>


   <Todo id={Id}/>
    </>
  )
}


// eslint-disable-next-line react/prop-types
function Todo({id}){
  const [todos, setTodos] = useState({}); 



  useEffect(()=>{
    axios.get(`https://dummyjson.com/todos/${id}`)
    .then((response)=>{
      console.log("fetched", response.data)
      setTodos(response.data)
    })
    .catch(error=> console.log("error", error));
  },[id]);

  return(
  <div>
    <h1>{todos.todo}</h1 >
    {/* <h1>{todos.id}</h1> */}
  <span>{todos.todo}</span>
 

  </div> 
 

 
  )
}
export default App
