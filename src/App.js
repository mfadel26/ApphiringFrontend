import React, { Component  } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Profile from './pages/profile'
import Editprofile from './pages/Editprofile';
class App extends Component {
  render() { 
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/navbar" component={Navbar}/> 
        <Route path="/card" component={Cards}/>  
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/edit" component={Editprofile}/>
      </Router>
      
    );
  }
  }

export default App;
