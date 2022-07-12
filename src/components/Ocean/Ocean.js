import React from 'react';
import './Ocean.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "../Home/Home";
import Manatee from '../Manatee/Manatee';
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';
import Error from '../Error/Error';
// Routes to Switch

function Ocean() {
  return(
      <Router>
        <div className="nav">
          <ul className='navLinks'>
            <li><a href="/">Home</a></li>
            <li><a href="/manatee">Manatee</a></li>
            <li><a href="/narwhal">Narwhal</a></li>
            <li><a href="/whale">Whale</a></li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/manatee" element={<Manatee/>}/>
          <Route path="/narwhal/:username" element={<Narwhal/>}/>
          <Route path="/whale" element={<Whale/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
  );
}
export default Ocean;