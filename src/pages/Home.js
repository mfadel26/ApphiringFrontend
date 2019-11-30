import React, { Component} from 'react';
import Navbar from '../components/Navbar.js';
import Cards from '../components/Cards.js';
import Register from '../pages/Register.js'
import Login from '../pages/Login.js'
class Home extends Component{
    render() {
        return(
            <div>
                <Login />

            </div>
    );
  }
}
export default Home;
