import React, { Component } from 'react';
import Navbaren from '../../components/Navbaren'
import axios from 'axios'
import { Link } from 'react-router-dom';
class Profilen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr_engineer: '',

    }
  }
  componentDidMount() {
    var idEng = this.props.match.params.idEngineer
    //console.log(idEng);

    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    fetch('http://54.161.87.89:7000/engineer/by/' + idEng)
      .then(response => response.json())
      .then(data => this.setState({ arr_engineer: data[0] }))
    let login = localStorage.getItem('Login');
    // console.log('data:'+data);
    // console.log(this.state.arr_engineer);


    if (login == 0) {
      this.setState({
        isLogin: '0'
      });
    }
  }
  render() {

    return (

      <div>
        <Navbaren />
        <div className=" card-profile">




          
          <div className="row justify-content-center">
          
            <div className="card-body text-center">
              <img src={'http://localhost:4000/myhire/file/' + this.state.arr_engineer.photo} width={230} height={220} className="avatar-xxl rounded-circle" alt="profile" />
              <h3 className="card-text" >{this.state.arr_engineer.name} </h3>
              <p className="card-text ">Description : {this.state.arr_engineer.description}  </p>
              <p className="card-text">Skill : {this.state.arr_engineer.skill} </p>
              <p className="card-text">Location : {this.state.arr_engineer.location} </p>
              <p className="card-text">Showcase:  {this.state.arr_engineer.showcase}</p>
              <a href="/editen" className="btn btn-info btn-sm"><i className="fa fa-pencil-alt" aria-hidden="true" /> Edit profile</a>
          
            </div>
          </div>
          <div className="card-body">
              <h4 className="title text-center"><strong>Follow Me</strong></h4>
              <div>
                <div className="socials text-center mt-3">
                  <a href className="btn btn-circle btn-primary ">
                    <i className="fa fa-facebook" /></a> <a href className="btn btn-circle btn-danger ">
                    <i className="fa fa-google-plus" /></a> <a href className="btn btn-circle btn-info ">
                    <i className="fa fa-instagram" /></a> <a href="https://www.instagram.com/fadelpratama26/" onclick="console.log('The link was clicked.'); return false" className="btn btn-circle btn-warning ">
                    <i className="fa fa-envelope" /></a>
                </div></div>
              </div>
        </div>
      </div>
    );
  }
}
export default Profilen;