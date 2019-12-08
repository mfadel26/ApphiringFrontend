import React, { Component  } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './pages/company/Home'
import Login from './pages/Login'

import Navbar from './components/Navbar'
import Navbaren from './components/Navbaren'
import Register from './pages/Register'
import Logout from './components/Logout';
import Cardsen from './components/Cardsen'
import Profilen from './pages/enginer/Profilen'
import Editprofile from './pages/company/Editprofile'
import Editen from './pages/enginer/Editen';
import Form from './pages/enginer/Form';
import Formcp from './pages/company/Formcp';
import Listpro from './pages/enginer/Listpro';

import Project from './pages/company/Project';


class App extends Component {
  
  render() { 
    return (
      <Router>
        <Switch>
        
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/formcp" component={Formcp} />
        <Route path="/form" component={Form} />
        <Route path="/navbar" component={Navbar}/> 
        <Route path="/navbaren" component={Navbaren}/> 
        <Route path="/listpro" component={Listpro} />
        <Route path="/cardsen" component={Cardsen}/> 
        <Route path="/register" component={Register}/>
        <Route path="/project" component={Project}/>
        <Route path="/profilen/:idEngineer" component={Profilen}/>
        <Route path="/edit" component={Editprofile}/>
        <Route path="/editen" component={Editen}/>
        <Route exact path={'/logout'} ><Logout/>
          </Route>
        </Switch>

      </Router>
    );
  }
  }

export default App;
