import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
// import Dashboard  from "./components/Dashboard"
// import Landing  from "./components/Landing"


const Dash = lazy(()=> import("./components/Dashboard"))
const Landing = lazy(()=> import("./components/Landing"))
function App4() {

   
  return (
     <>
   
   <BrowserRouter>   
   <Appbar/>
   <Routes>
    <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dash/></Suspense>}/>

    <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
   </Routes>
   
   </BrowserRouter>
   </>
  )
}

function Appbar(){
    const navigate = useNavigate();
    return(
        <div>
        <button onClick={()=>{
            navigate("/");
    
        }}>landing </button>
    
    <button onClick={()=>{
            navigate("/dashboard");
    
        }}>dash  </button>
     </div>
    )

}



export default App4