import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import gambar from'../components/img/12.png'
class Navbar extends Component{
    render() {
        return(
          
          <div> 
       
            <nav className="navbar navbar-expand-lg navbar-light bg-light">    
            <div className="container">
            <img src = "https://www.arkademy.com/img/logo%20arkademy-01.9c1222ba.png" width={100} height={50}  />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0  mr-auto">
          <div className="wrap">
          <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
           
          </button>
        </div>

      </div>
          </form>
          <div>
          
          <ul className="navbar-nav ml-auto">
           <a className="fa fa-home fa-2x  nav-link p-9" href="/card"></a>  
           <p></p>
           
            <li className="nav-item"> 
            <a className="fa fa-comments fa-2x nav-link p-9 " href="#"></a>
            </li>
            <p></p>
            <li className="nav-item"> 
            <a className="fa fa-bell fa-2x nav-link p-9 " href="#"></a>
            </li>
            <p></p>
            <li className="nav-item"> 
            <li className="nav-item dropdown">
        <a className="fa fa-user fa-2x nav-link p-9 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/profile">Profile</a>
          <a class="dropdown-item" href="#">Logout</a>
         
        </div>
      </li>
    </li>
        </ul>
         </div>
             </div>
        </div>
      </nav>
    
      
    </div>
   
    
    );
    
  }
}


export default Navbar;




