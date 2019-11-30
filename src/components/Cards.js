import React, { Component } from 'react';
import './Cards.css'
import axios from 'axios'
import  Navbar from '../components/Navbar'

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      items : [],
      user: []
    };
    
  }
  componentDidMount(){
    axios.get(`http://localhost:5000/user`)
    .then(res => {
      console.log(res);
      this.setState({ items: res.data});
    });
    
  }
    render() {
      const {items} = this.state
        return(
        
<div><Navbar/>              
          
          <form id="as">
            
           <div className="container my-10 py-8 text-center">
            <div className="row">
              {items.map((item, index) =>             
               
              <div key={index}>
              {/* <br></br>*/} 
         <div className="card-body">
        <div className="card" style={{width: '15rem'}}>
        <img src= {`http://localhost:5000/image/`+item.foto} className="card-img" alt="..." />
        <h5 className="card-title">Name : {item.name}</h5>
        <p className="card-text">Description : {item.description}</p>
        <p className="card-text">Skill : {item.skill}</p>
        <p className="card-text">Location : {item.location}</p>
        <p className="card-text">Date of Birth : {item.date_of_birth}</p>
        <p className="card-text">Showcase: {item.showcase}</p>
        </div>
        </div>
        </div>
        
        )}
              </div> 
              </div>
              </form>
             </div>
             
               
  
        );
    }
}


export default Cards;