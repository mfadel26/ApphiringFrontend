import React, { Component } from 'react';
import '../components/css/Login.css'
import { Redirect } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isvalid: '0'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('submit!');
    this.sendLogin();
    event.preventDefault();

  }

  async sendLogin() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/myhire/login',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      });
      axios.defaults.headers.common['Authorization'] = response.data.result.token;
      localStorage.setItem("Authorization", response.data.result.token);
      localStorage.setItem("Login", '1');
      this.setState({
        isvalid: '2'
      })


    } catch (error) {
      console.log(error);
      this.setState({
        isvalid: '1'
      })
    }
  }

  render() {
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

              {/* login */}
              <div className="col-md-4 col-md-offset-1">
                {(this.state.isvalid === '1') ? <div className="alert alert-danger" role="alert">the username or password invalid</div> : null}
                <form onSubmit={this.handleSubmit}>
               
                  <form className="signup-form">
                 <div className="text-center">
                 <img src="https://i.imgur.com/qq1Sg7Y.png" width={150} height={100} />
                  </div>  
                    <h2 className="text-center sign">Login
                        
                    </h2>
                    <div className="form-group">
                      <input type="text" name="username" className="form-control" placeholder="Name" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group text-center">

                      <button type="submit" className="btn btn-warning btn-block" onClick={this.handlerSubmit}>Login</button>
                      <h1 className="desc"></h1>Don't have an account? ?<br></br>
                      <a href="/register" className="text-warning" >Sign Up</a>
                    </div>
                  </form>
                </form>
                {(this.state.isvalid === '2') && <Redirect push to='/cardsen'></Redirect>}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;