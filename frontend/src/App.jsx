import React,{createContext} from "react";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
// Browser Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const userContext = createContext();
function App(){
  //props
  const user={
    name:"John",
    age:30,
    email:"John@gmail.com"
  }
  return(
    <>
    <BrowserRouter>
      <userContext.Provider value={user}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/about/:id" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </userContext.Provider> 
    </BrowserRouter>
    </>
  )
}

export default App;