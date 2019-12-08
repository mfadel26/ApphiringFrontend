import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../components/css/Register.css';
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      category: '0',
      isChange: '0'
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
    this.sendLogin()
    event.preventDefault();
  }

  async sendLogin() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/myhire/regis',
        data: {
          username: this.state.username,
          password: this.state.password,
          category: this.state.category
        }
      });
      axios.defaults.headers.common['Authorization'] = response.data.result.token;
      localStorage.setItem("Authorization", response.data.result.token);
      console.log(response.data.result.token);
      this.setState({
        isChange: '1',
        values : this.state.category
      })
    } catch (error) {
      console.log(error);
      this.setState({
        isChange: '2'
      })
    }
  }

  render() {
    if  ( this.state.values == 0) {
      return <Redirect to={'/form'} />
     }if (this.state.values == 1){
       return<Redirect to={'/formcp'} />
     }
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
                <h1 className="desc"></h1> <br />
                <h1 className="desc"> <br /></h1><br />
                <h1 className="desc"><br /></h1><br />
                <h1 className="desc"><br />  </h1>

              </div>
             
             
              <div className="col-md-6 col-md-offset-1">
                <form onSubmit={this.handleSubmit}>
                  <form className="signup-form">
                    <div className="text-center">
                    <img src="https://i.imgur.com/qq1Sg7Y.png" width={180} height={100} /></div>
                    <h2 className="text-center sign">Sign up to find work and talent</h2>
                    {(this.state.isChange == '2') && <div className="alert alert-danger" role="alert">username already exists </div>}

                    <div className="form-group">
                      <input type="text" name="username" className="form-control" placeholder="Username"
                        value={this.state.username} onChange={this.handleChange} require="required"/>
                    </div>

                    <div className="form-group">
                      <input type="password" name="password" className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Category</label>
                      <select className="form-control" name='category' type='text' value={this.state.category} onChange={this.handleChange}>
                        <option value='0'>Engineer</option>
                        <option value='1'>Company</option>
                      </select>
                    </div>
                    <br></br>
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-warning btn-block">Sign up</button>
                     
                     
                      <h1 className="desc"></h1>By signing up, you agree to our Terms , Data Policy and Cookies Policy.
                            <h1 className="desc"></h1>Have an account ?<br></br>
                      <a href="/login" className="text-warning" >login</a>
                    </div>

                  </form>
                  
                </form>
               
              </div>
            {/* {(this.state.isChange=='1')&&<Redirect push to='/form'></Redirect>} */}
            </div>
            
          </div>
          
        </section>
      </div>
    )
  }
}
export default Register