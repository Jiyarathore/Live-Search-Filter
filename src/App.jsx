import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  // useRouteMatch,
  /* useParams*/
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import User from "./User";
// import Menu from "./Menu";
// import Service from "./Service";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <div className='menu_style'>

            {/* <Link to="/about">About</Link>
          
            <Link to="/service">Service</Link>
         
            <Link to="/contact">Contact</Link> */}

            <NavLink exact activeClassName="active_class" to='/about'>About</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'>Contact</NavLink>
            <NavLink exact activeClassName="active_class" to='/user'>User</NavLink>
            <NavLink exact activeClassName="active_class" to='/service'>Service</NavLink>


          </div>

          <Routes>
            <Route path="/about" element={<About name="About" />}>
            </Route>
            <Route path="/service" element={<About name="Service" />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
              <Route path = "/user:fname" element={<User/>}></Route>
              <Route element={<Error/>}/>
          </Routes>
        </div>
      </Router>

    </>
  );
};

export default App;