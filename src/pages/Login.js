
import React, { Component} from 'react';
import './Login.css';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Login extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      users: {
        login: false,
        'email': '',
        'password': ''
      }
    }

    this.handlerChange = this.handlerChange.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
  }
  
  handlerChange =(event)=> {

    const data = {...this.state.users};
    data[event.target.name] = event.target.value;
    this.setState({
       users : data
    }, ()=> {console.log(this.state.users)})
  }

  handlerSubmit= async (event)=>{
    event.preventDefault() 
    try {
      const response = await axios.post(`http://localhost:5000/login`, this.state.users)
      this.setState({login: true})
      localStorage.setItem('token', response.data)
    } catch (err) {
      console.log(err);
    }

  }
  
    render() {
      if (this.state.login) {
        return <Redirect to={'/card'}></Redirect>
      }
        return (
                  <div>
                  <section id="home">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 caption text-center">
                        <h2>
                          <span className="animated-text" />
                          <span className="typed-cursor" />
                        </h2>
                      </div>
                      {/* Sign Up */}
                      
                      <div className="col-md-4 col-md-offset-1">
                      <form onSubmit={this.handlerSubmit}> 
                        <form className="signup-form">
                        <h2>
                          
                          <h2 className="text-center sign">Login
                          <i className="fa fa-user-circle " style={{fontSize: '25px', color: '#83BEE0'}} /></h2>
                          </h2>
                          <hr />
                          
                          <div className="form-group">
                            <input type="text" name="email" onChange={this.handlerChange} className="form-control" placeholder="Email Address" required="required" />
                          </div>
                          <div className="form-group">
                            <input type="password" name="password" onChange={this.handlerChange} className="form-control" placeholder="Password" required="required" />
                          </div>
                          <div className="form-group text-center">
                            <button type="submit" className="btn btn-blue btn-block" onClick={this.handlerSubmit}>Login</button>
                            <h1 className="desc"></h1>Don't have an account? ?<br></br>
                            <a href="/register" className="text" >Sign Up</a>
                          </div>
                        </form>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
                </div>
              
                
                );
              }
            }
    export default Login;