import React, { Component } from 'react';
import  Navbar from '../components/Navbar'
import axios from 'axios'
import {Link} from 'react-router-dom';
import gambar from'../components/img/12.png'
class Profile extends Component{
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
  
        return(

<div>
  <Navbar/>

            <div className="row">
              <div className="col-md-12">
                <div className="card card-profile  overflow-hidden">
                  <div className="card-body text-center profile-bg">
                    <div className=" card-profile">
                      <div className="row justify-content-center">
                        <div className>
                          <div className>
                            <a href="#">
                              <img src="https://cdn.idntimes.com/content-images/community/2019/11/photo-1553798194-cc0213ae7f99-0e650decbbcb649fa6af99ff27236302_600x400.jpg" width={350} height={250} className="avatar-xxl rounded-circle" alt="profile" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-3 text-dark">M Fadel pratama </h3>
                    <p className="mb-2 text-white">Web Designer</p>
                    <div className="text-center mb-4">   
                    </div>
                    <a href="/edit"  className="btn btn-info btn-sm"><i className="fa fa-pencil-alt" aria-hidden="true" /> Edit profile</a>
                  </div>
                  </div>  
                    <div className="card-body text-center"> 
                    <h5 className="card-title">Name  </h5>
                    <p className="card-text">Description </p>
                    <p className="card-text">Skill : </p>
                    <p className="card-text">Location : </p>
                    <p className="card-text">Date of Birth : </p>
                    <p className="card-text">Showcase: </p>
                    </div>
                    )}
                         <div className="card-body">
                        <h4 className="title text-center"><strong>Follow Me</strong></h4>
                       <div> 
                       <div className="socials text-center mt-3">
                        <a href className="btn btn-circle btn-primary ">
                          <i className="fa fa-facebook" /></a> <a href className="btn btn-circle btn-danger ">
                          <i className="fa fa-google-plus" /></a> <a href className="btn btn-circle btn-info ">
                          <i className="fa fa-instagram" /></a> <a href="https://www.instagram.com/fadelpratama26/" onclick="console.log('The link was clicked.'); return false" className="btn btn-circle btn-warning ">
                          <i className="fa fa-envelope" /></a>
                      </div>
                    </div>
                   
                      </div>
                      </div>
                      </div>
                      </div>
                        
                  
                
             
      );
    }
  }
  export default Profile;