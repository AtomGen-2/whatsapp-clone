import './App.css';
import React, { useState } from "react";
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import Login from './Login.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// third party imports
import {useStateValue} from "./StateProvider.js"
 
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <Login/>
      ):(
        <div className='app_body'>        
        <Router>
          <Switch>
          <Route path="/rooms/:roomId">
              <Sidebar/>
              <Chat/>
            </Route>
            <Route path="/">
              <Sidebar/>
            </Route>
          </Switch>
        </Router>
        <Router/>
      </div>
      )}
    </div>
  );
}
export default App;
