import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './css/Cards.css'
import axios from 'axios'
import Navbaren from '../components/Navbaren'
class Cardsen extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      user: []
    };
  }
  componentDidMount() {
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    fetch('http://54.161.87.89:7000/engineer/read')
    .then(response => response.json())
    .then(data => this.setState({ items : data }))
    let login = localStorage.getItem('Login');
    if(login == 0){
        this.setState({
            isLogin: '0'
        });
    }
}
  render() {
    const { items } = this.state
    return (
      <div><Navbaren />
        <form id="as ">
        <div className="jumbotron jumbotron-fluid bg-dark">
        <div className="container">
          <h1 className="display-4 text-center text-light">Talking About Hiring</h1>
          <p className="lead text-center text-light">Search job sites, Career fairs, Organizations and company career pages.</p>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="What are you looking for ?" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-secondary" id="search">Search</button>
            </div>
          </div>
        </div>
      </div>
          <div className="container my-10 py-8 text-center">
            <div className="row">
              {items.map((item, index) =>
                <div key={index}>
                  {/* <br></br>*/}
                  `<div class="card" >
                  <Link to={`/profilen/${item.created_by}`} >
                  <img src={`http://54.161.87.89:7000/myhire/file/` + item.photo} className="card-img" alt="..." /></Link>
                    <div class="card-image"></div>
                    <div class="card-text">
                    <h2>{item.name}</h2>
                    <p><i class="fa fa-map-marker"></i> Location2 tester</p>
                      <p><i class="fa fa-map-marker"></i> Location  {item.location}</p>
                      <p><i class="fa fa-star"></i>Skill {item.skill}</p>
                      <span class="date"></span>
                    </div> 
                  </div>`
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Cardsen;