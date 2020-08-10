import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './img/1.png'
import './css/Navbar.css'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
class Navbaren extends Component {

  constructor(props) {
    super(props);
    this.state = {
      islogout: '0',
      isLogin: '1',
      items: [],
      user: []
    }
    this.sendLogout = this.sendLogout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //this.getsearch();
    this.setState({
      [name]: value,
      items: []
    });
  }
  componentDidMount() {
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    fetch('http://localhost:7000/engineer/read')
    .then(response => response.json())
    .then(data => this.setState({ items : data }))
    let login = localStorage.getItem('Login');
    if(login == 0){
        this.setState({
            isLogin: '0'
        });
    }
}

  async sendLogout() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:7000/myhire/logout',
      });
      console.log(response.data.result);
      localStorage.removeItem("Authorization");
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit(event) {
    console.log('submit!');
    this.sendLogout()
    this.setState({
      islogout: '1'
    })
    localStorage.setItem("Login", '0');
    event.preventDefault();
  }
  render() {  const { items } = this.state
    return (

      <div>
         
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container">
            <img src="https://i.imgur.com/qq1Sg7Y.png" width={150} height={90} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0  mr-auto">
                
              </form>
              <div>
                <ul className="navbar-nav ml-auto">
                  <a className="fa fa-home fa-2x  nav-link p-9" href="/cardsen"></a>
                  <p></p>
                  <li className="nav-item">
                    <a className="fa fa-comments fa-2x nav-link p-9 " href="#"></a>
                  </li>
                  
                  <p></p>
                  <li className="nav-item">
                    <a className="fa fa-bell fa-2x nav-link p-9 " href="/listpro"></a>
                  </li>
                  <p></p>
                  <li className="nav-item">
                    <li className="nav-item dropdown">
                      <a className="fa fa-user-circle fa-2x nav-link p-8 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </a>
                      <div class="dropdown-menu" roboto="navbarDropdown">
                        {(this.state.islogout === '1') && <Redirect push to='/login'></Redirect>}
                        {
                          (this.state.isLogin === '0') && <Link to={'/Login/'}><i class="fa fa-user-circle fa-1x" style={{padding:'10px'}}>Login</i></Link>
                        }
                        {
                          (this.state.isLogin === '0') && <Link to={'/register/'}><i class="fa fa-user-circle fa-1x" style={{padding:'10px'}}>Signup</i></Link>
                        }
                        {
                          (this.state.isLogin === '1') && <Link to={`/project/`}><i class="fa fa-user-circle fa-1x" style={{padding:'10px'}}>project</i></Link>
                        }
                        {
                          (this.state.isLogin === '1') && <Link to={'/'}><i class="fa fa-toggle-off fa-1x" onClick={this.handleSubmit}>Logout</i></Link>
                        }
                         
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
export default Navbaren;




