import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class Listpro extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      islogout:'0',
      islogin:'1'
    };
  }
  handleSubmit(event) {
    console.log('submit!');
    this.sendLogout()
    this.setState({
      islogout:'1'
    })
    localStorage.setItem("Login", '0');
    event.preventDefault();
  }
  componentDidMount() {
    axios.get('http://localhost:7000/myhire/readProject')
    .then(res =>{
      console.log(res);
    this.setState({ items :res.data });
  });
  }

render() {
    const { items } = this.state
    return (
      <div>
      <div className="row">
        <div className="col-12">
          <div className="card-pro">
            <div className="card-header ">
              <h3 className="card-title ">Projects</h3>
              <div className="card-options">         
              </div>
            </div>
            <div className="table-responsive">
           
              <table className="table card-table table-striped table-vcenter table-outline table-bordered text-nowrap ">
                <thead>
                  <tr>
                    <th scope="col" className="border-top-0">ID</th>
                    <th scope="col" className="border-top-0">Project Name</th>
                    <th scope="col" className="border-top-0">Required Skill</th>
                    <th scope="col" className="border-top-0">Get</th>
                  </tr>
                </thead>
                {items.map((item, index) =>
                <div key={index}>
                <tbody>
                
                  <tr>
                    <th scope="row">1</th>
                    <td>{item.name}</td>
                    <td>{item.skill}</td>
                    <td> </td>
                    <td></td>
                    <td></td>
                  </tr>  
                </tbody>
                </div> 
                    )}
              </table>
              
              <td><a className="btn btn-sm btn-primary" href="/cardsen"><i className="fa fa-info-circle" /> back</a> </td>
            </div>
          </div>
        </div>
      </div>
      </div>
       );
    }
  }
  export default Listpro;