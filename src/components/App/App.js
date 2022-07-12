import React from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import useToken from './useToken';


function App() {
  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }
  return(
      <Router>
        <div className="wrapper">
          <h1>Login Application</h1>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/preferences" element={<Preferences/>}/>
          </Routes>
        </div>
      </Router>
  );
}
export default App;
