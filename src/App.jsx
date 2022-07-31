import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const App=()=>{
    return (
        <>
        <Routes>
            <Route exact path="/" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Routes>



            {/* <About/>
            <Contact/> */}
        </>
    );
};

export default App;