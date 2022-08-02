import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";

const App=()=>{

const Name =()=>{
  return <h1>Hello i am a name page</h1>;

}

    return (
        <>
        {/* <Routes>
            <Route  path="/"><About/></Route>
            <Route path="/contact" component={Contact}/>
        </Routes> */}
        <BrowserRouter>
        <Menu/>
      <Routes>
        <Route path="/" element={<About/>}>
        </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/Name" element={<Name />} />
          <Route element={<Error/>}/>
      </Routes>
    </BrowserRouter>

            {/* <About/>
            <Contact/> */}
        </>
    );
};

export default App;