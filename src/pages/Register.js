import React, { Component} from 'react';
import './Register.css';
import axios from 'axios'
import gambar from '../components/img/bglogin.jpg'

class Register extends Component{

  state={
    'email': '',
    'password': '',
    'type': '',
   }
   handlerChange =(e)=>{
    this.setState({ [e.target.name] : e.target.value })
  }
  handlerSubmit= async (event)=>{
    event.preventDefault()
    console.log(this.state)
    await axios.post('http://localhost:5000/reg/', this.state)
    this.props.history.push('/login')

  }
  
  render() {
        return (

               <div >
                 <section id="reg">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 caption text-center">
                      
                        <h2>
                          <span className="animated-text" />
                          <span className="typed-cursor" />
                        </h2>
                        <h1 className="desc"></h1> <br/>
                        <h1 className="desc"> <br/></h1><br/>
                        <h1 className="desc"><br/></h1><br/>
                        <h1 className="desc"><br/>  </h1>
                        
                      </div>
                      {/* Sign Up */}
                      
                      <div className="col-md-6 col-md-offset-1">
                       <form onSubmit={this.handlerSubmit}>
                        <form className="signup-form">
                          <img src="https://www.arkademy.com/img/logo%20arkademy-01.9c1222ba.png" width={100} height={50}  />
                          <h2 className="text-center sign">Sign up to find work and talent</h2>
                          <hr />
                          <div className="form-group">
                            <input type="text" name="email" onChange={this.handlerChange} className="form-control" placeholder="Email Address" required="required" />
                          </div>
                          
                          <div className="form-group">
                            <input type="password"  name="Password" onChange={this.handlerChange} className="form-control" placeholder="Password" required="required" />
                          </div>
                            
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="type" id="exampleRadios1" onChange={this.handlerChange} defaultValue="1" defaultChecked />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                              Enginer
                            </label>
                          </div>
                          
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="type" id="exampleRadios2" onChange={this.handlerChange} defaultValue="2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                              Company
                            </label>
                          </div>

                         <br></br>
                         <br></br>
                  
                          <div className="form-group text-center">
                            <button type="submit" className="btn btn-blue btn-block">Sign up</button>
                            <h1 className="desc"></h1>By signing up, you agree to our Terms , Data Policy and Cookies Policy. 
                            <h1 className="desc"></h1>Have an account ?<br></br>
                            <a href="/login" className="text" >login</a>
                            
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
export default Register;